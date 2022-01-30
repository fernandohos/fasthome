import { useFormikContext } from 'formik';
import React, { ReactElement } from 'react';
import * as C from '../../app/styles/preview';
import { FormikWrapper } from '../../app/patterns/FormikWrapper';
import { FormNavBar } from '../../app/patterns/FormNavBar';
import { Header } from '../../app/patterns/Header';
import { Carousel } from '../../a../../app/components/Carousel';
import { interiorFeatures, externalFeatures } from '../../app/utils/formCheckboxes';
import { FormValuesType } from '../../app/types/FormValuesType';
import mapIcon from '../../public/images/map-icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

function Preview() {
    const { values } = useFormikContext<FormValuesType>();
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <C.Container>
            <Head>
                <title>Fasthome | Advertise preview</title>
            </Head>
            <FormNavBar />
            {
                !!values.files && values.files.length > 0 && <Carousel images={values.files} />
            }
            <main style={{ marginTop: values.files.length > 0 ? '-7rem' : '' }}>
                <C.ContainerGroup>
                    <C.Title>
                        <h1>{values.title}</h1>
                        <p>{currencyFormatter.format(values.price)}</p>
                    </C.Title>
                    <C.AddressContainer>
                        <C.IconContainer>
                            <Image src={mapIcon} alt="map icon" layout="fill" />
                        </C.IconContainer>
                        <p>{values.address}</p>
                    </C.AddressContainer>
                    <C.SecondTitle>General Information</C.SecondTitle>
                    <C.GridContainer>
                        <C.InformationGrid>
                            <p>Published Date</p>
                            <p>{new Date().toLocaleDateString()}</p>
                            <p>Advertise Status</p>
                            <p>{values.status}</p>
                            <p>Housing Shape</p>
                            <p>{values.housing}</p>
                            <p>Room</p>
                            <p>{values.number_of_room}</p>
                            <p>Gross / Net M² </p>
                            <p>{values.gross_m2}/{values.net_m2}</p>
                            <p>Warming Type</p>
                            <p>{values.warming_type}</p>
                            <p>Building Age</p>
                            <p>{values.building_age}</p>
                        </C.InformationGrid>
                        <C.InformationGrid>
                            <p>Floor Location</p>
                            <p>{values.floor_location}</p>
                            <p>Available for Loan</p>
                            <p>{values.avaliable_for_loan}</p>
                            <p>Furnished</p>
                            <p>{values.furnished}</p>
                            <p>Dues</p>
                            <p>{currencyFormatter.format(values.dues)}</p>
                            <p>Swap</p>
                            <p>{values.swap}</p>
                            <p>Front</p>
                            <p>{values.front}</p>
                            <p>Rental Income</p>
                            <p>{currencyFormatter.format(values.rental_income)}</p>
                        </C.InformationGrid>
                    </C.GridContainer>
                </C.ContainerGroup>
                <C.ContainerGroup>
                    <C.SecondTitle>Explanation</C.SecondTitle>
                    <p>{values.explanation}</p>
                </C.ContainerGroup>
                {(values.external_features.length > 0 || values.interior_features.length > 0) && <C.ContainerGroup>
                    <C.GridContainer>
                        {values.interior_features.length > 0 && <div>
                            <C.SecondTitle>Interior Features</C.SecondTitle>
                            <C.FeaturesList>
                                {interiorFeatures.map((feature, i) => (
                                    values.interior_features.indexOf(feature[1]) > - 1 ? <li key={feature[1]}>{feature[0]}</li> : null
                                ))}
                            </C.FeaturesList>
                        </div>}
                        {values.external_features.length > 0 && <div>
                            <C.SecondTitle>External Features</C.SecondTitle>
                            <C.FeaturesList>
                                {externalFeatures.map((feature, i) => (
                                    values.external_features.indexOf(feature[1]) > -1 ? <li key={feature[1]}>{feature[0]}</li> : null
                                ))}
                            </C.FeaturesList>
                        </div>}
                    </C.GridContainer>
                </C.ContainerGroup>}
                <Link href="/advertise/contact" passHref>
                    <C.Button>Next</C.Button>
                </Link>
            </main>
        </C.Container>
    )
}

Preview.getLayout = function getLayout(page: ReactElement) {
    return (
        <FormikWrapper>
            <Header />
            {page}
        </FormikWrapper>
    )
}

export default Preview;