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
        numberOfRoom: 0,
        grossM2: 0,
        netM2: 0,
        warmingType: '',
        buildingAge: 0,
        floorLocation: 0,
        avaliableForLoan: '',
        furnished: '',
        status: '',
        dues: 0,
        swap: '',
        front: '',
        rentalIncome: 0,
        address: '',
        files: [],
        interiorFeatures: [],
        externalFeatures: [],
        name: user?.displayName ?? '',
        email: user?.email ?? '',
        mobileNumber: user?.mobileNumber ?? '',
        mobileNumber2: user?.mobileNumber2 ?? '',
        telephone: user?.telephone ?? '',
        createdAt: 0,
    }


    async function onSubmit(
        values: FormValuesType,
        actions: FormikHelpers<FormValuesType>) {
        setUploading(true);

        const promise2 = new Promise((resolve, reject) => {
            values.files.map(file => {
                const storageRef = ref(storage, `/houses/${file.name}`);
                // compress file
                imageCompression(file, {
                    maxSizeMB: .2
                }).then(compressedFile => {
                    const uploadTask = uploadBytesResumable(storageRef, compressedFile);
                    const unsub = uploadTask.on(
                        "state_changed",
                        (snapshot: any) => {
                            const pgrs = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        },
                        (error) => console.log(error),
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref).then(url => {
                                imagesUrls.push(url);
                                if (imagesUrls.length === values.files.length) {
                                    resolve(imagesUrls);
                                }
                            });
                        }
                    )
                })
            })
        });

        Promise.all([promise2]).then(async () => {
            const collectionRef = collection(db, "houses");
            const getAdData = () => {
                const data = JSON.parse(JSON.stringify(values));
                delete data.files;
                data.images = imagesUrls;
                data.createdAt = new Date().getTime()
                return data;
            }
            const docRes = await addDoc(collectionRef, getAdData());
            actions.resetForm();
            router.push("/advertise/confirm");
            setUploading(false);
        })
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
                    {children}
                </Form>
            )}
        </Formik>
    )
}