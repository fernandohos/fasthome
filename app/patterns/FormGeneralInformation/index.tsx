import React from 'react';
import * as C from '@styles/form';
import { Fieldset } from '@components/Fieldset';
import { FormikInput } from '@components/FormikInput';
import { FormikSelect } from '@components/FormikSelect';
import formConfig from '@utils/formConfig.json';

type OptionsType = {
    label: string;
    value: string;
}[]

export default function FormGeneralInformation() {

    function getOptions(name: string) {
        return formConfig.form.fields.find(obj => obj.name === name)?.options as OptionsType;
    }

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
                    options={getOptions('warming_type')}
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
                    options={getOptions('avaliable_for_loan')}
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikSelect
                    label="Furnished"
                    name="furnished"
                    options={getOptions('furnished')}
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikSelect
                    label="Status"
                    name="status"
                    options={getOptions('status')}
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
                    options={getOptions('swap')}
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikSelect
                    label="Front"
                    name="front"
                    options={getOptions('front')}
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
