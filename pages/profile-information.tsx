import React from 'react';
import * as C from '../app/styles/profileInformation';
import { Header } from '@patterns/Header';
import { Button } from '@components/Button';
import { useAuth } from '../app/hooks/useAuth';
import { Formik, Form, Field } from 'formik';
import { FormikInput } from '@components/FormikInput';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { getErrorMessage } from '../app/utils/getErrorMessage';
import Link from 'next/link';
import Head from 'next/head';
import imageCompression from 'browser-image-compression';
import { PictureUpload } from '@components/PictureUpload';
import { supabase } from '../app/services/supabase';

interface FileType extends File {
    preview: string;
}

type FormUser = {
    display_name: string | null;
    email: string | null;
    province: string | null;
    district: string | null;
    mobile_number: string | null;
    mobile_number_2: string | null;
    telephone: string | null;
    address: string | null;
    photo?: FileType | null;
    photo_url?: string | null;
}

export default function ProfileInformation() {
    const router = useRouter();
    const { user, updateUser } = useAuth();
    const initialValues = {
        display_name: user?.display_name ?? '',
        email: user?.email ?? '',
        province: user?.province ?? '',
        district: user?.district ?? '',
        mobile_number: user?.mobile_number ?? '',
        mobile_number_2: user?.mobile_number_2 ?? '',
        telephone: user?.telephone ?? '',
        address: user?.address ?? '',
        photo: null,
    }

    function onSubmit(values: FormUser) {
        let photo_url = '';
        if (user) {
            if (values.photo) {
                imageCompression(values.photo, {
                    maxSizeMB: .1
                }).then(async compressedFile => {
                    // UPLOAD COMPRESSED FILE TO SUPABASE
                    await supabase
                        .storage
                        .from('avatars')
                        .upload(
                            // CREATE A UNIQUE NAME WITH THE FILE NAME AND A RANDOM HASH
                            user.display_name + Math.random().toString(36).slice(2, 6), compressedFile)
                        .then(({ data, error }) => {
                            // GET UPLOADED IMAGE URL
                            const { publicURL, error: urlError } = supabase
                                .storage
                                .from('avatars')
                                .getPublicUrl(data?.Key.split('/')[1] ?? '');
                            return { publicURL, error: urlError };
                        })
                        .then(({ publicURL, error }) => {
                            if (publicURL) {
                                photo_url = publicURL;
                            }
                        })
                }).then(() => {
                    const newUser = {...values};
                    delete newUser.photo;
                    newUser.photo_url = photo_url;
                    const res = updateUser(newUser);
                    toast.promise(res, {
                        loading: "Updating profile...",
                        error: ({ code }) => getErrorMessage(code),
                        success: "Successfully updated!"
                    }).then(() => {
                        setTimeout(() => {
                            router.push(
                                typeof router.query.redirect === "string" ?
                                    router.query.redirect :
                                    "/"
                            );
                        }, 1000);
                    })
                })
            } 
            else {
                    const newUser = {...values};
                    delete newUser.photo;
                    const res = updateUser(newUser);
                    toast.promise(res, {
                        loading: "Updating profile...",
                        error: ({ code }) => getErrorMessage(code),
                        success: "Successfully updated!"
                    }).then(() => {
                        setTimeout(() => {
                            router.push(
                                typeof router.query.redirect === "string" ?
                                    router.query.redirect :
                                    "/"
                            );
                        }, 1000);
                    })

            }
        }
    }

    return (
        <C.Container>
            <Head>
                <title>Fasthome | Profile information</title>
            </Head>
            <Toaster />
            <Header />
            <C.ProfileInfo>
                {
                    user ? (
                        <>
                            <h1>Membership Information</h1>
                            <Formik
                                enableReinitialize
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                            >
                                {({ values, errors }) => (
                                    <Form>
                                        <C.InputContainer>
                                            <FormikInput
                                                name="display_name"
                                                label="Name"
                                                type="text"
                                            />
                                            <FormikInput
                                                name="email"
                                                label="Email"
                                                type="email"
                                            />
                                            <FormikInput
                                                name="province"
                                                label="Province"
                                                type="text"
                                            />
                                            <FormikInput
                                                name="district"
                                                label="District"
                                                type="text"
                                            />
                                            <FormikInput
                                                name="mobile_number"
                                                label="Mobile Number"
                                                type="text"
                                            />
                                            <FormikInput
                                                name="mobile_number_2"
                                                label="Mobile Number 2"
                                                type="text"
                                            />
                                            <FormikInput
                                                name="telephone"
                                                label="Telephone"
                                                type="text"
                                            />
                                        </C.InputContainer>
                                        <Field component={PictureUpload} />
                                        <FormikInput
                                            name="address"
                                            label="Address"
                                            type="text"
                                            isTextarea
                                        />
                                        <div className="button">
                                            <Button type="submit">Save</Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </>
                    )
                        : (<C.NotLogged>
                            <h1>You have to login to access this page</h1>
                            <Link href="/login?redirect=/profile-information" passHref>
                                <a>
                                    <Button style={{ marginTop: "2rem" }}>Login</Button>
                                </a>
                            </Link>
                        </C.NotLogged>)
                }
            </C.ProfileInfo>
        </C.Container>
    )
}