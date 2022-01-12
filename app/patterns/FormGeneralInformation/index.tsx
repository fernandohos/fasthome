import React from 'react';
import * as C from '../../styles/form';
import { Fieldset } from '../../components/Fieldset';
import { FormikInput } from '../../components/FormikInput';
import { FormikSelect } from '../../components/FormikSelect';
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
                    name="numberOfRoom"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikInput
                    label="Gross M²"
                    name="grossM2"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikInput
                    label="Net M²"
                    name="netM2"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikSelect
                    label="Warming Type"
                    name="warmingType"
                    options={formOptions.warmingType}
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikInput
                    label="Building Age"
                    name="buildingAge"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikInput
                    label="Floor Location"
                    name="floorLocation"
                    type="number"
                />
            </C.InputContainer>
            <C.InputContainer>
                <FormikSelect
                    label="Avaliable For Loan"
                    name="avaliableForLoan"
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
                    name="rentalIncome"
                    type="number"
                />
            </C.InputContainer>
        </Fieldset>
    )
}
