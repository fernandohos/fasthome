import React from 'react';
import * as C from '../app/styles/signup';
import Link from 'next/link';
import { GoogleButton } from '../app/components/GoogleButton';
import { FormikInput } from '../app/components/FormikInput';
import { AuthLayout } from '../app/patterns/AuthLayout';
import { useAuth } from '../app/hooks/useAuth';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

type FormType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
}

type FormValuesType = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm password please")
});

export default function Signup() {
    const { signUp, signUpWithGoogle } = useAuth();

    function onSubmit({name, email, password}: FormValuesType, actions: FormikHelpers<FormValuesType>) {
        signUp(email, password, name);
        actions.resetForm;  
    }

    return (
        <AuthLayout>
            <GoogleButton onClick={signUpWithGoogle} />
            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                <Form>
                    <C.Separator>
                        <div />
                        <p>or</p>
                        <div />
                    </C.Separator>
                    <FormikInput
                        label='Name'
                        name='name'
                        type='text'
                    />
                    <FormikInput
                        label="Email"
                        name="email"
                        type="email"
                    />
                    <FormikInput
                        label="Password"
                        name="password"
                        type="password"
                    />
                    <FormikInput
                        label="Confirm Password"
                        name="passwordConfirmation"
                        type="password"
                    />
                    <C.SignupButton type="submit">Sign Up</C.SignupButton>
                    <C.LoginLink>
                        <span>Alredy a member? <Link href="/login">Login now</Link>!</span>
                    </C.LoginLink>
                </Form>
            </Formik>
        </AuthLayout>
    )
}
