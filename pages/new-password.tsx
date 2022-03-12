import React, { useState } from 'react';
import { Fieldset } from '@components/Fieldset';
import { supabase } from '@services/supabase';
import { Button } from '@components/Button';
import * as C from '@styles/resetPassword';
import { Header } from '@patterns/Header';
import { Footer } from '@patterns/Footer';
import { Input } from '@components/Input';
import Head from 'next/head';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const router = useRouter();

    async function sendResetPasswordRequest() {
        const loadingToast = toast.loading('Changing Password...');
        const accessToken = router.asPath.split('#')[1].split('&')[0].split('=')[1];

        const { error, data } = await supabase.auth.api
            .updateUser(accessToken, { password })

        toast.dismiss(loadingToast);

        if (error) {
            toast.error(error.message);
        }
        else if (data) {
            toast.success('Password changed successfully');
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
                            label="New Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
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
