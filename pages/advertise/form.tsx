import React, { ReactElement } from 'react'
import { Field, useFormikContext } from 'formik';
import dynamic from 'next/dynamic';
import * as C from '../../app/styles/form';
import { Header } from '../../app/patterns/Header';
import { FormCategory } from '../../app/patterns/FormCategory';
import FormGeneralInformation from '../../app/patterns/FormGeneralInformation';
import { PostingPhotos } from '@components/PostingPhotos';
import FormAdvertiseFeatures from '../../app/patterns/FormAdvertiseFeatures';
import { FormikWrapper } from '../../app/patterns/FormikWrapper';
import { FormNavBar } from '../../app/patterns/FormNavBar';
import Link from 'next/link';
import { FormValuesType } from '../../app/types/FormValuesType';
import { useAuth } from '../../app/hooks/useAuth';
import Head from 'next/head';
import formConfig from '../../app/utils/formConfig.json';
import { FieldGroup } from '../../app/patterns/FieldGroup';
import { NextStepFormButton } from '@components/NextStepFormButton';

const DynamicMap = dynamic(
    () => import('../../app/patterns/FormLocationInformation'),
    { ssr: false }
)

function AdvertiseForm() {
    const { user } = useAuth();

    return (
        <>
            <Head>
                <title>Fasthome | Advertise form</title>
            </Head>
            <FormNavBar />
            {user ? (<C.Container>
                {
                    formConfig.form.fieldgroups.filter(group => group !== "Contact").map(group => {
                        return (
                            <FieldGroup
                                key={group}
                                groupName={group}
                                fields={formConfig.form.fields.filter(field => field.group === group)}
                            />
                        )
                    })
                }
                <DynamicMap />
                <Field component={PostingPhotos} />
                {/* 
                    <FormCategory />
                    <FormGeneralInformation />
                    <FormAdvertiseFeatures />
                */}
                <NextStepFormButton />
            </C.Container>
            ) : (
                <C.Container>
                    <C.LoginGroup>
                        <div>
                            <h1> You need an account to create an ad</h1>
                            <Link href="/signup?redirect=/advertise/form" passHref>
                                <C.Button>Sign Up Now!</C.Button>
                            </Link>
                        </div>
                    </C.LoginGroup>
                </C.Container>)}
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