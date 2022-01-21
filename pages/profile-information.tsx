import React, { useState } from 'react';
import * as C from '../app/styles/profileInformation';
import { Header } from '../app/patterns/Header';
import { Button } from '../app/components/Button';
import { useAuth } from '../app/hooks/useAuth';
import { Formik, Form } from 'formik';
import { FormikInput } from '../app/components/FormikInput';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { getErrorMessage } from '../app/utils/getErrorMessage';

type FormUser = {
    displayName: string | null;
    email: string | null;
    province: string | null;
    district: string | null;
    mobileNumber: string | null;
    mobileNumber2: string | null;
    telephone: string | null;
    address: string | null;
}

export default function ProfileInformation() {
    const router = useRouter();
    const { user, updateUser } = useAuth();
    const initialValues = {
        displayName: user?.displayName ?? '',
        email: user?.email ?? '',
        province: user?.province ?? '',
        district: user?.district ?? '',
        mobileNumber: user?.mobileNumber ?? '',
        mobileNumber2: user?.mobileNumber2 ?? '',
        telephone: user?.telephone ?? '',
        address: user?.address ?? ''
    }

    function onSubmit(values: FormUser) {
        if (user) {
            const res = updateUser(user.uid, values);
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

    return (
        <C.Container>
            <Toaster />
            <Header />
            <C.ProfileInfo>
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
                                    name="displayName"
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
                                    name="mobileNumber"
                                    label="Mobile Number"
                                    type="text"
                                />
                                <FormikInput
                                    name="mobileNumber2"
                                    label="Mobile Number 2"
                                    type="text"
                                />
                                <FormikInput
                                    name="telephone"
                                    label="Telephone"
                                    type="text"
                                />
                            </C.InputContainer>
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
            </C.ProfileInfo>
        </C.Container>
    )
}