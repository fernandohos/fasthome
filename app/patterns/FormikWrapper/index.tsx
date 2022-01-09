import React, { ReactNode } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { schema } from '../../utils/formValitationSchema';
import { FormValuesType } from '../../types/FormValuesType';

type Props = {
    children: ReactNode;
}

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
    externalFeatures: []
}

export function FormikWrapper({ children }: Props) {
    function onSubmit(values: FormValuesType, actions: FormikHelpers<FormValuesType>) {
        console.log("SUBMITED", values);
        actions.resetForm();
    }
    return (
        <Formik
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