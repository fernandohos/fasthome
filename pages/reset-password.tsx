import React, { useState } from 'react';
import { Fieldset } from '@components/Fieldset';
import { supabase } from '@services/supabase';
import { Button } from '@components/Button';
import * as C from '@styles/resetPassword';
import { Header } from '@patterns/Header';
import { Footer } from '@patterns/Footer';
import { Input } from '@components/Input';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Toaster, toast } from 'react-hot-toast';

export default function ResetPassword() {
    const [email, setEmail] = useState('');
    const router = useRouter();

    async function sendResetPasswordRequest() {
        const loadingToast = toast.loading('Sending Reset Password Request...');
        const { data, error } = await supabase.auth.api
            .resetPasswordForEmail(email);
        toast.dismiss(loadingToast);
        if (error) {
            toast.error(error.message);
        }
        else if (data) {
            toast.success('Request sended successfully!');
            setTimeout(() => router.push('/'), 1000);
        }
    }

    return (
        <div>
            <Toaster />
            <Head>
                <title>Fasthome | Reset password</title>
            </Head>
            <Header />
            <C.Container>
                <Fieldset title="Send reset password request">
                    <C.InputContainer>
                        <Input
                            label="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                        />
                    </C.InputContainer>
                    <C.ButtonContainer>
                        <Button onClick={sendResetPasswordRequest}>Send Reset Password Request</Button>
                    </C.ButtonContainer>
                </Fieldset>
            </C.Container>
            <Footer />
        </div>
    )
}
