import React from 'react';
import { Fieldset } from '@components/Fieldset';
import { FormikSelect } from '@components/FormikSelect';
import formConfig from '@utils/formConfig.json';
import * as C from '@styles/form';

export function FormCategory() {
    const housingOptions = formConfig.form.fields.find(obj => obj.name === 'housing')?.options;
    const saleOptions = formConfig.form.fields.find(obj => obj.name === 'sale')?.options;

    return (
        <Fieldset title="Category">
            {housingOptions && saleOptions && <C.FlexWrapper>
                <C.InputContainer>
                    <FormikSelect
                        label="Housing"
                        name="housing"
                        options={housingOptions}
                    />
                </C.InputContainer>
                <C.InputContainer width="15rem">
                    <FormikSelect
                        label="Sale"
                        name="sale"
                        options={saleOptions}
                    />
                </C.InputContainer>
            </C.FlexWrapper>}
        </Fieldset>
    )
}
