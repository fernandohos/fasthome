import React, { ReactElement } from 'react';
import { Header } from '../../app/patterns/Header';
import { FormNavBar } from '../../app/patterns/FormNavBar';
import * as C from '../../app/styles/contact';
import { FormikWrapper } from '../../app/patterns/FormikWrapper';
import { Fieldset } from '../../app/components/Fieldset';
import { FormikInput } from '../../app/components/FormikInput';
import Head from 'next/head';


function Contact() {
    return (
        <C.Container>
            <Head>
                    <title>Fasthome | Advertise contact</title>
                </Head>
            <FormNavBar />
            <Fieldset title='Contact'>
                <C.InputContainer>
                    <FormikInput
                        label='Name/Surname'
                        name='name'
                        type='text'
                    />
                </C.InputContainer>
                <C.InputContainer>
                    <FormikInput
                        label='Email'
                        name='email'
                        type='email'
                    />
                </C.InputContainer>
                <C.FlexInput>
                    <C.InputContainer>
                        <FormikInput
                            label='Mobile Number'
                            name='mobile_number'
                            type='text'
                        />
                    </C.InputContainer>
                    <C.InputContainer>
                        <FormikInput
                            label='Mobile Number 2'
                            name='mobile_number_2'
                            type='text'
                        />
                    </C.InputContainer>
                </C.FlexInput>
                <C.InputContainer>
                    <FormikInput
                        label='Telephone'
                        name='telephone'
                        type='text'
                    />
                </C.InputContainer>
            </Fieldset>
            <C.Button type="submit">Next</C.Button>
        </C.Container>
    )
}

Contact.getLayout = function getLayout(page: ReactElement) {
    return (
        <FormikWrapper>
            <Header />
            {page}
        </FormikWrapper>
    )
}

export default Contact;