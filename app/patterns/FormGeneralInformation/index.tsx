import React from 'react';
import * as C from '../../styles/form';
import { Fieldset } from '@components/Fieldset';
import { FormikInput } from '@components/FormikInput';
import { FormikSelect } from '@components/FormikSelect';
import { formOptions } from '../../utils/formOptions';

export default function FormGeneralInformation() {
    return (
        <Fieldset title="General Information">
            <C.InputContainer width="50rem">
                <FormikInput
                    label="Title"
                    name="title"
                    type="text"
                />
            </C.InputContainer>
            <FormikInput
                label="Explanation"
                name="explanation"
                type="text"
                isTextarea
            />
            <C.InputContainer>
                <FormikInput
                    label="Price"
                    name="price"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikInput
                    label="Number Of Room"
                    name="number_of_room"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikInput
                    label="Gross M²"
                    name="gross_m2"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikInput
                    label="Net M²"
                    name="net_m2"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikSelect
                    label="Warming Type"
                    name="warming_type"
                    options={formOptions.warmingType}
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikInput
                    label="Building Age"
                    name="building_age"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikInput
                    label="Floor Location"
                    name="floor_location"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikSelect
                    label="Avaliable For Loan"
                    name="avaliable_for_loan"
                    options={formOptions.avaliableForLoan}
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikSelect
                    label="Furnished"
                    name="furnished"
                    options={formOptions.furnished}
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikSelect
                    label="Status"
                    name="status"
                    options={formOptions.status}
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikInput
                    label="Dues"
                    name="dues"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikSelect
                    label="Swap"
                    name="swap"
                    options={formOptions.swap}
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikSelect
                    label="Front"
                    name="front"
                    options={formOptions.front}
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikInput
                    label="Rental Income"
                    name="rental_ncome"
                    type="number"
                />
            </C.InputContainer>
        </Fieldset>
    )
}
