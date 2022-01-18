import React, { useState } from 'react';
import { FormValuesType } from '../../../app/types/FormValuesType';
import mapIcon from '../../../public/images/map-icon.svg';
import { Header } from '../../../app/patterns/Header';
import { db } from '../../../app/services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import * as C from '../../../app/styles/house';
import { GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { Carousel } from '../../../app/components/Carousel';
import { Fieldset } from '../../../app/components/Fieldset';
import defaultUserImage from '../../../public/images/default-user-image.svg';
import phoneIcon from '../../../public/images/phone-icon.svg';
import emailIcon from '../../../public/images/email-icon.svg';

interface HouseType extends FormValuesType {
    images: string[];
    userId: string;
    userPhotoUrl: string;
}

type Props = {
    data: HouseType | undefined;
}

export default function House({ data }: Props) {
    const [showPhone, setShowPhone] = useState(false);

    function copyText(text: string) {
        if (navigator.clipboard)
            navigator.clipboard.writeText(text);
    }

    return (
        <>
            <Header />
            {
                data ? (
                    <C.Container>
                        <C.Title>
                            <div>
                                <h1>{data.title}</h1>
                                <div className="address">
                                    <Image
                                        src={mapIcon}
                                        alt="map icon"
                                        width={25}
                                        height={25} />
                                    <p>{data.address}</p>
                                </div>
                            </div>
                            <div>
                                <h2>{data.price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}</h2>
                            </div>
                        </C.Title>
                        <C.Content>
                            <Carousel
                                images={data.images.map(url => ({ preview: url }))}
                                thumbs
                            />
                            <Fieldset title='General Information'>
                                <C.GenInfoGrid>
                                    <p>Published Date</p>
                                    <p>{data.createdAt}</p>
                                    <p>Floor Location</p>
                                    <p>{data.floorLocation}</p>
                                    <p>Advertise Status</p>
                                    <p>{data.sale}</p>
                                    <p>Furnished</p>
                                    <p>{data.furnished}</p>
                                    <p>Housing Shape</p>
                                    <p>{data.housing}</p>
                                    <p>Dues</p>
                                    <p>{data.dues}</p>
                                    <p>Room</p>
                                    <p>{data.numberOfRoom}</p>
                                    <p>Front</p>
                                    <p>{data.front}</p>
                                    <p>Gross / Net M²</p>
                                    <p>{data.grossM2} / {data.netM2}</p>
                                    <p>Warming Type</p>
                                    <p>{data.warmingType}</p>
                                    <p>Building Age</p>
                                    <p>{data.buildingAge}</p>
                                </C.GenInfoGrid>
                            </Fieldset>
                            <Fieldset title="Explanation">
                                <p className="explanation">{data.explanation}</p>
                            </Fieldset>
                            <Fieldset title="House Features">
                                <C.FeaturesContainer>
                                    <div>
                                        <C.TitleFeatures>Interior Features</C.TitleFeatures>
                                        <C.Features>
                                            {data.interiorFeatures.map(feature => (
                                                <li key={feature}>{feature}</li>
                                            ))}
                                        </C.Features>
                                    </div>
                                    <div>
                                        <C.TitleFeatures>External Features</C.TitleFeatures>
                                        <C.Features>
                                            {data.externalFeatures.map(feature => (
                                                <li key={feature}>{feature}</li>
                                            ))}
                                        </C.Features>
                                    </div>
                                </C.FeaturesContainer>
                            </Fieldset>
                        </C.Content>
                        <C.Owner>
                            <C.OwnerCard>
                                <div className="user-image">
                                    <Image
                                        layout="fill"
                                        src={data.userPhotoUrl ?? defaultUserImage}
                                        alt={data.name}
                                    />
                                </div>
                                <p>{data.name}</p>
                                <C.InfoButton
                                    background="var(--green2)"
                                    color="#fff"
                                    onClick={e => setShowPhone(p => !p)}
                                >
                                    {showPhone ? (
                                        <p>{data.mobileNumber}</p>
                                    ) : (
                                        <>
                                            <Image src={phoneIcon} width={20} height={20} alt="phone icon" />
                                            <p>view phone</p>
                                        </>
                                    )}
                                </C.InfoButton>
                                <C.InfoButton
                                    border="var(--dark-blue)"
                                    color="var(--dark-blue)"
                                    onClick={e => copyText(data.email)}
                                >
                                    <Image src={emailIcon} width={20} height={20} alt="phone icon" />
                                    <p>copy email</p>
                                </C.InfoButton>
                            </C.OwnerCard>
                        </C.Owner>
                    </C.Container>
                ) : (
                    // not found page goes here
                    <p>not found</p>
                )
            }
        </>
    )
}

export function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ id: string }>) {
    const ref = doc(db, `/houses/${params?.id ?? ''}`);
    return {
        props: { data: await getDoc(ref).then((docSnap) => docSnap.data()) }
    }
}