import React from 'react';
import * as C from '../app/styles/profileInformation';
import { Header } from '../app/patterns/Header';
import { Button } from '../app/components/Button';
import useAuth from '../app/hooks/useAuth';
import { Formik, Form } from 'formik';
import { FormikInput } from '../app/components/FormikInput';

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
            updateUser(user.uid, values);
        }
    }

    return (
        <C.Container>
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
                                    value={values.displayName}
                                    label="Name"
                                    error={errors.displayName}
                                    type="text"
                                />
                                <FormikInput
                                    name="email"
                                    value={values.email}
                                    label="Email"
                                    error={errors.email}
                                    type="email"
                                />
                                <FormikInput
                                    name="province"
                                    value={values.province}
                                    label="Province"
                                    error={errors.province}
                                    type="text"
                                />
                                <FormikInput
                                    name="district"
                                    value={values.district}
                                    label="District"
                                    error={errors.district}
                                    type="text"
                                />
                                <FormikInput
                                    name="mobileNumber"
                                    value={values.mobileNumber}
                                    label="Mobile Number"
                                    error={errors.mobileNumber}
                                    type="text"
                                />
                                <FormikInput
                                    name="mobileNumber2"
                                    value={values.mobileNumber2}
                                    label="Mobile Number 2"
                                    error={errors.mobileNumber2}
                                    type="text"
                                />
                                <FormikInput
                                    name="telephone"
                                    value={values.telephone}
                                    label="Telephone"
                                    error={errors.telephone}
                                    type="text"
                                />
                            </C.InputContainer>
                            <FormikInput
                                name="address"
                                value={values.address}
                                label="Address"
                                error={errors.address}
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
        </C.Container >
    )
}
