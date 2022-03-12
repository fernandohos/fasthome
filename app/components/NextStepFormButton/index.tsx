import React from 'react';
import * as C from './styles';
import Link from 'next/link';
import { useFormikContext } from 'formik';
import { FormValuesType } from '@types/FormValuesType';

export function NextStepFormButton() {
    const { errors } = useFormikContext<FormValuesType>();
    const hasErrors = (
        errors.housing ||
            errors.sale ||
            errors.title ||
            errors.explanation ||
            errors.price ||
            errors.mobile_number ||
            errors.gross_m2 ||
            errors.net_m2 ||
            errors.warming_type ||
            errors.building_age ||
            errors.floor_location ||
            errors.avaliable_for_loan ||
            errors.furnished ||
            errors.status ||
            errors.dues ||
            errors.swap ||
            errors.rental_income ||
            errors.address ||
            errors.external_features ||
            errors.interior_features ||
            errors.files
            ?
            true : false
    )

    return (
        <Link href={!hasErrors ? "/advertise/preview" : "/advertise/form"} passHref>
            <C.Button disabled={hasErrors}>Next</C.Button>
        </Link>
    )
}
