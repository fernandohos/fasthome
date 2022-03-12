import React from 'react';
import * as C from '../app/styles/signup';
import Link from 'next/link';
import { GoogleButton } from '@components/GoogleButton';
import { FormikInput } from '@components/FormikInput';
import { AuthLayout } from '@patterns/AuthLayout';
import { useAuth } from '@hooks/useAuth';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { getErrorMessage } from '../app/utils/getErrorMessage';
import toast, { Toaster } from 'react-hot-toast';
import Head from 'next/head';

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
    const router = useRouter();

    async function onSubmit({ name, email, password }: FormValuesType, actions: FormikHelpers<FormValuesType>) {
        const signToast = toast.loading("Signing up...");
        const res = await signUp(email, password, name);
        toast.dismiss(signToast);
        if (res.error) toast.error(res.error.message);
        if (res.user) toast.success("Signed up successfully");
        if(!res.error)
        setTimeout(() => {
            router.push(
                typeof router.query.redirect === "string" ?
                    router.query.redirect :
                    "/"
            );
        }, 1000);
    }

    async function handleGoogleSignUp() {
        const signToast = toast.loading("Signing up...");
        const res = await signUpWithGoogle();
        toast.dismiss(signToast);
        if (res.error) toast.error(res.error.message);
        if (res.user) toast.success("Signed with Google successfully");
        if(!res.error)
        setTimeout(() => {
            router.push(
                typeof router.query.redirect === "string" ?
                    router.query.redirect :
                    "/"
            );
        }, 1000);
    }

    return (
        <AuthLayout>
            <Head>
                <title>Fasthome | Signup</title>
            </Head>
            <Toaster />
            <GoogleButton onClick={handleGoogleSignUp} />
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
                        <span>Alredy a member? <Link href={{ pathname: "/login", query: router.query }}>Login now</Link>!</span>
                    </C.LoginLink>
                </Form>
            </Formik>
        </AuthLayout>
    )
}
