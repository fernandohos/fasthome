import React, { ReactNode } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { schema } from '../../utils/formValitationSchema';
import { FormValuesType } from '../../types/FormValuesType';
import { useAuth } from '../../hooks/useAuth';

type Props = {
    children: ReactNode;
}

export function FormikWrapper({ children }: Props) {
    const { user } = useAuth();
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
        name: user?.displayName ??'',
        email: user?.email ?? '',
        mobileNumber: user?.mobileNumber ?? '',
        mobileNumber2: user?.mobileNumber2 ?? '',
        telephone: user?.telephone ?? '',
    }
    function onSubmit(values: FormValuesType, actions: FormikHelpers<FormValuesType>) {
        console.log("SUBMITED", values);
        actions.resetForm();
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