import React from 'react';
import * as C from '@styles/login';
import { AuthLayout } from '@patterns/AuthLayout';
import { GoogleButton } from '@components/GoogleButton';
import { useAuth } from '@hooks/useAuth';
import Link from 'next/link';
import { Formik, Form, FormikHelpers } from 'formik';
import { FormikInput } from '@components/FormikInput';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { getErrorMessage } from '@utils/getErrorMessage';
import Head from 'next/head';

type FormType = {
    email: string;
    password: string;
}

export default function Login() {
    const { signIn, signUpWithGoogle } = useAuth();
    const router = useRouter();

    const YupSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required()
    })

    async function onSubmit({ email, password }: FormType, actions: FormikHelpers<FormType>) {
        const signToast = toast.loading("Signing in...");
        const res = await signIn(email, password);
        toast.dismiss(signToast);
        if (res.error) toast.error(res.error.message);
        if (res.user) toast.success("Signed in successfully");
        setTimeout(() => {
            router.push(
                typeof router.query.redirect === "string" ?
                    router.query.redirect :
                    "/"
            );
        }, 1000);
        actions.resetForm();
        if(!res.error)
        setTimeout(() => {
            router.push(
                typeof router.query.redirect === "string" ?
                    router.query.redirect :
                    "/"
            );
        }, 1000);
    }

    async function handleGoogleLogin() {
        const signToast = toast.loading("Signing with google...");
        const res = await signUpWithGoogle();
        toast.dismiss(signToast);
        if (res.error) toast.error(res.error.message);
        if (res.user) toast.success("Signed with Google");
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
                <title>Fasthome | Login</title>
            </Head>
            <Toaster />
            <C.LoginForm>
                <GoogleButton onClick={handleGoogleLogin} />
                <C.Separator>
                    <div />
                    <p>or</p>
                    <div />
                </C.Separator>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={YupSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, errors }) => (
                        <Form>
                            <FormikInput label="Email" name="email" type="email" />

                            <FormikInput label="Password" name="password" type="password" />

                            <Link href="/reset-password" passHref>
                                <p className="link">I forgot my password</p>
                            </Link>

                            <C.LoginButton type="submit">
                                login
                            </C.LoginButton>

                            <p className="signup-link">
                                Still not a member?
                                <Link href={{ pathname: "/signup", query: router.query }} passHref>
                                    <span className="link">Sign Up Now!</span>
                                </Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </C.LoginForm>
        </AuthLayout>
    )
}
