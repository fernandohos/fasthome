import React, { ReactNode } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { schema } from '../../utils/formValitationSchema';

type Props = {
    children: ReactNode;
}

interface FileType extends File {
    preview: string;
}

type ValuesType = {
    housing: string,
    sale: string,
    title: string,
    explanation: string,
    price: number,
    numberOfRoom: number,
    grossM2: number,
    netM2: number,
    warmingType: string,
    buildingAge: number,
    floorLocation: number,
    avaliableForLoan: string,
    furnished: string,
    status: string,
    dues: number,
    swap: string,
    front: string,
    rentalIncome: number,
    address: string;
    files: FileType[];
    externalFeatures: string[],
    interiorFeatures: string[]
}

const initialValues: ValuesType = {
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
    function onSubmit(values: ValuesType, actions: FormikHelpers<ValuesType>) {
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