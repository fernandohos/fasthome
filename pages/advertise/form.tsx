import React from 'react'
import dynamic from 'next/dynamic';
import * as C from '../../app/styles/form';
import { Header } from '../../app/patterns/Header';
import { FormNavBar } from '../../app/patterns/FormNavBar';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import { FormCategory } from '../../app/patterns/FormCategory';
import FormGeneralInformation from '../../app/patterns/FormGeneralInformation';
import { PostingPhotos } from '../../app/components/PostingPhotos';
import FormAdvertiseFeatures from '../../app/patterns/FormAdvertiseFeatures';
import { schema } from '../../app/utils/formValitationSchema';

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

export const Map = dynamic(
    () => import('../../app/patterns/FormLocationInformation'),
    { ssr: false }
)

export default function AdvertiseForm() {
    function onSubmit(values: ValuesType, actions: FormikHelpers<ValuesType>) {
        console.log("SUBMITED", values);
        actions.resetForm();
    }
    return (
        <>
            <Header />
            <C.Container>
                <FormNavBar />
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={schema}
                >
                    {() => (
                        <Form style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <FormCategory />
                            <FormGeneralInformation />
                            <Map />
                            <Field component={PostingPhotos} />
                            <FormAdvertiseFeatures />
                            <C.Button type="submit">Next</C.Button>
                        </Form>
                    )}
                </Formik>
            </C.Container>
        </>
    )
}
