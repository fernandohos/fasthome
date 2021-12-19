import React from 'react';
import * as C from '../app/styles/login';
import { AuthLayout } from '../app/patterns/AuthLayout';
import { GoogleButton } from '../app/components/GoogleButton';
import useAuth from '../app/hooks/useAuth';
import Link from 'next/link';
import { Formik, Form, FormikHelpers, ErrorMessage } from 'formik';
import { FormikInput } from '../app/components/FormikInput';
import * as Yup from 'yup';

type FormType = {
    email: string;
    password: string;
}

export default function Login() {
    const { signIn, signUpWithGoogle } = useAuth();

    const YupSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required()
    })

    function onSubmit({ email, password }: FormType, actions: FormikHelpers<FormType>) {
        signIn(email, password);
        actions.resetForm();
    }

    return (
        <AuthLayout>
            <C.LoginForm>
                <GoogleButton onClick={signUpWithGoogle} />
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
                            <FormikInput label="Email" error={errors.email} value={values.email} name="email" type="email" />
                            <ErrorMessage name="email">
                                {msg => (
                                    <C.Error>{msg}</C.Error>
                                )}
                            </ErrorMessage>

                            <FormikInput label="Password" error={errors.password} value={values.password} name="password" type="password" />
                            <ErrorMessage name="password">
                                {msg => (
                                    <C.Error>{msg}</C.Error>
                                )
                                }</ErrorMessage>

                            <Link href="/reset-password" passHref>
                                <p className="link">I forgot my password</p>
                            </Link>

                            <C.LoginButton type="submit">
                                login
                            </C.LoginButton>

                            <p className="signup-link">
                                Still not a member?
                                <Link href="/signup" passHref>
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
