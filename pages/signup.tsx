import React, { useState } from 'react';
import * as C from '../app/styles/signup';
import Image from 'next/image';
import Logo from '../public/images/Logo2.svg';
import Icon1 from '../public/images/signup-icon1.svg';
import Icon2 from '../public/images/signup-icon2.svg';
import Icon3 from '../public/images/signup-icon3.svg';
import Icon4 from '../public/images/signup-icon4.svg';
import Google from '../public/images/google-logo.svg';
import { useRouter } from 'next/router';

type FormType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Signup() {
    const router = useRouter();

    const [form, setForm] = useState({} as FormType);

    return (
        <C.Container>
            <div className="close-btn" onClick={e => router.back()}>x</div>
            <div className="content">
                <C.Banner>
                    <div className="container">
                        <div className="logo">
                            <Image src={Logo} alt="logo" layout="fill" />
                        </div>
                        <div className="texts">
                            <p>Why should I Join Fasthome?</p>
                            <p>To have the experience of “property”, “information” and “trust” in the real estate world all together…</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="image-container">
                                    <Image src={Icon1} alt="location icon" layout="fill" />
                                </div>
                                <p>Learn about location.</p>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <Image src={Icon2} alt="location icon" layout="fill" />
                                </div>
                                <p>Find out the value of your house free of charge.</p>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <Image src={Icon3} alt="location icon" layout="fill" />
                                </div>
                                <p>Discover houses that will improve your life quality.</p>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <Image src={Icon4} alt="location icon" layout="fill" />
                                </div>
                                <p>Be aware of new projects.</p>
                            </div>
                        </div>
                    </div>
                </C.Banner>
                <C.Form>
                    <div>
                        <C.GoogleButton>
                            <div className="google-logo-container"><Image src={Google} alt="google logo" layout="fill" /></div>
                            <p>Connect with Google</p>
                        </C.GoogleButton>
                        <C.Separator>
                            <div />
                            <p>or</p>
                            <div />
                        </C.Separator>
                        <C.InputContainer isEmpty={!form.name}>
                            <input type="text" value={form.name} onChange={e => setForm(prev => {return {...prev, name: e.target.value}})}/>
                            <label>Name and Surname</label>
                        </C.InputContainer>
                        <C.InputContainer isEmpty={!form.email}>
                            <input type="email" />
                            <label>Email</label>
                        </C.InputContainer>
                        <C.InputContainer isEmpty={!form.password}>
                            <input type="password" />
                            <label>Password</label>
                        </C.InputContainer>
                        <C.InputContainer isEmpty={!form.confirmPassword}>
                            <input type="password" />
                            <label>Confirm Password</label>
                        </C.InputContainer>
                    </div>
                </C.Form>
            </div>
        </C.Container>
    )
}
