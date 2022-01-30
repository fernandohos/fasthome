import React, { ReactNode, useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { schema } from '../../utils/formValitationSchema';
import { FormValuesType } from '../../types/FormValuesType';
import { useAuth } from '../../hooks/useAuth';
import { storage, db } from '../../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import imageCompression from 'browser-image-compression';
import { ref, getDownloadURL, uploadBytesResumable } from '@firebase/storage';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

type Props = {
    children: ReactNode;
}

export function FormikWrapper({ children }: Props) {
    const { user } = useAuth();
    const [uploading, setUploading] = useState(false);
    const router = useRouter();
    let imagesUrls: string[] = [];
    const initialValues: FormValuesType = {
        housing: '',
        sale: '',
        title: '',
        explanation: '',
        price: 0,
        number_of_room: 0,
        gross_m2: 0,
        net_m2: 0,
        warming_type: '',
        building_age: 0,
        floor_location: 0,
        avaliable_for_loan: '',
        furnished: '',
        status: '',
        dues: 0,
        swap: '',
        front: '',
        rental_income: 0,
        address: '',
        files: [],
        interior_features: [],
        external_features: [],
        name: user?.display_name ?? '',
        email: user?.email ?? '',
        mobile_number: user?.mobile_number ?? '',
        mobile_number_2: user?.mobile_number_2 ?? '',
        telephone: user?.telephone ?? '',
        created_at: 0,
        latlng: {
            lat: 0,
            lng: 0,
        },
    }


    async function onSubmit(
        values: FormValuesType,
        actions: FormikHelpers<FormValuesType>) {
        setUploading(true);
        console.log("SUBMIT LATLNG", values.latlng);

        const uploadFilesPromise = new Promise((resolve, reject) => {
            if (!values.files) resolve([]);
            // LOOPING FOR UPLOAD EACH IMAGE
            values.files.map(file => {
                // COMPRESS IMAGE
                imageCompression(file, {
                    maxSizeMB: .2
                }).then(async compressedFile => {
                    // UPLOAD COMPRESSED FILE TO SUPABASE
                    const urlResponse = await supabase
                        .storage
                        .from('houses')
                        .upload(
                            // CREATE A UNIQUE NAME WITH THE FILE NAME AND A RANDOM HASH
                            compressedFile.name.split('.')[0] + Math.random().toString(36).slice(2, 6), compressedFile)
                        .then(({ data, error }) => {
                            // GET UPLOADED IMAGE URL
                            if (data?.Key) {
                                const { publicURL, error: urlError } = supabase
                                    .storage
                                    .from('houses')
                                    .getPublicUrl(data?.Key.split('/')[1]);
                                return { publicURL, error: urlError };
                            }
                        })
                    if (!urlResponse?.error && urlResponse?.publicURL) imagesUrls.push(urlResponse.publicURL);
                })
                if (imagesUrls.length === values.files.length) resolve(imagesUrls);
            })
        });

        toast.promise(uploadFilesPromise, {
            loading: "Uploading photos...",
            error: (err) => {console.log(err); return "an error ocurred"},
            success: "Uploaded successfully"
        });

        Promise.all([uploadFilesPromise]).then(async (promiseValues) => {
            const collectionRef = collection(db, "houses");
            const getAdData = () => {
                const data = JSON.parse(JSON.stringify(values));
                delete data.files;
                data.images = imagesUrls;
                data.createdAt = new Date().getTime();
                data.userId = user?.id;
                data.userPhotoUrl = user?.photo_url;
                return data;
            };
            const res = addDoc(collectionRef, getAdData());
            toast.promise(res, {
                loading: "Uploading advertise...",
                error: (err) => {console.log(err); return "Something wrong happened"},
                success: "Ad uploaded successfully!"
            });
            actions.resetForm();
            setTimeout(() => {
                router.push("/advertise/confirm");
                setUploading(false);
            }, 1000);
        });
    }
    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={schema}
        >
            {() => (
                <Form style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <Toaster />
                    {children}
                </Form>
            )}
        </Formik>
    )
}