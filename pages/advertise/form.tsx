import React, { ReactElement } from 'react'
import { Field, useFormikContext } from 'formik';
import dynamic from 'next/dynamic';
import * as C from '../../app/styles/form';
import { Header } from '../../app/patterns/Header';
import { FormCategory } from '../../app/patterns/FormCategory';
import FormGeneralInformation from '../../app/patterns/FormGeneralInformation';
import { PostingPhotos } from '../../app/components/PostingPhotos';
import FormAdvertiseFeatures from '../../app/patterns/FormAdvertiseFeatures';
import { FormikWrapper } from '../../app/patterns/FormikWrapper';
import { FormNavBar } from '../../app/patterns/FormNavBar';
import Link from 'next/link';
import { FormValuesType } from '../../app/types/FormValuesType';
import { useAuth } from '../../app/hooks/useAuth';
import Head from 'next/head';

const DynamicMap = dynamic(
    () => import('../../app/patterns/FormLocationInformation'),
    { ssr: false }
)

function AdvertiseForm() {
    const { user } = useAuth();
    const { errors } = useFormikContext<FormValuesType>();
    const hasErrors = (
        errors.housing ||
            errors.sale ||
            errors.title ||
            errors.explanation ||
            errors.price ||
            errors.numberOfRoom ||
            errors.grossM2 ||
            errors.netM2 ||
            errors.warmingType ||
            errors.buildingAge ||
            errors.floorLocation ||
            errors.avaliableForLoan ||
            errors.furnished ||
            errors.status ||
            errors.dues ||
            errors.swap ||
            errors.rentalIncome ||
            errors.address ||
            errors.externalFeatures ||
            errors.interiorFeatures ||
            errors.files
            ?
            true : false
    )
    return (
        <>
            <Head>
                <title>Fasthome | Advertise form</title>
            </Head>
            user ? (<C.Container>
                <FormNavBar />
                <FormCategory />
                <FormGeneralInformation />
                <DynamicMap />
                <Field component={PostingPhotos} />
                <FormAdvertiseFeatures />
                <Link href={!hasErrors ? "/advertise/preview" : "/advertise/form"} passHref>
                    <C.Button disabled={hasErrors}>Next</C.Button>
                </Link>
            </C.Container>)
            :
            (<C.Container>
                <C.LoginGroup>
                    <div>
                        <h1> You need an account to create an ad</h1>
                        <Link href="/signup" passHref>
                            <C.Button>Sign Up Now!</C.Button>
                        </Link>
                    </div>
                </C.LoginGroup>
            </C.Container>)
        </>
    )
}

AdvertiseForm.getLayout = function getLayout(page: ReactElement) {
    return (
        <FormikWrapper>
            <Header />
            {page}
        </FormikWrapper>
    )
}

export default AdvertiseForm;