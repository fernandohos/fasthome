import React from 'react';
import * as C from '../app/styles/login';
import { AuthLayout } from '../app/patterns/AuthLayout';
import { GoogleButton } from '../app/components/GoogleButton';
import { useAuth } from '../app/hooks/useAuth';
import Link from 'next/link';
import { Formik, Form, FormikHelpers } from 'formik';
import { FormikInput } from '../app/components/FormikInput';
import * as Yup from 'yup';
import {useRouter} from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { getErrorMessage } from '../app/utils/getErrorMessage';

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

    function onSubmit({ email, password }: FormType, actions: FormikHelpers<FormType>) {
        signIn(email, password);
        actions.resetForm();
        router.push(
            typeof router.query.redirect === "string" ? 
            router.query.redirect :
            "/"
        );

        const res = signIn(email, password);
        toast.promise(res, {
            loading: "Signing in...",
            error: ({ code }) => getErrorMessage(code),
            success: "Signed in successfully"
        }).then(() => {
            actions.resetForm();
            setTimeout(() => {
                router.push(
                    typeof router.query.redirect === "string" ?
                        router.query.redirect :
                        "/"
                );
            }, 1000)
        })
    }

    function handleGoogleLogin() {
        const res = signUpWithGoogle();

        toast.promise(res, {
            loading: "Signing up...",
            error: ({ code }) => getErrorMessage(code),
            success: "Signed with Google"
        }).then(() => {
            setTimeout(() => {
                router.push(
                    typeof router.query.redirect === "string" ?
                        router.query.redirect :
                        "/"
                );
            }, 1000)
        })
    }

    return (
        <AuthLayout>
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
                                <Link href={{pathname: "/signup", query: router.query}} passHref>
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
