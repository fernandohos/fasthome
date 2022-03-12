import React from 'react';
import { Fieldset } from '@components/Fieldset';
import { FormikSelect } from '@components/FormikSelect';
import { formOptions } from '../../utils/formOptions';
import * as C from '@styles/form';

export function FormCategory() {
    return (
        <Fieldset title="Category">
            <C.FlexWrapper>
                <C.InputContainer>
                    <FormikSelect
                        label="Housing"
                        name="housing"
                        options={formOptions.housing}
                    />
                </C.InputContainer>
                <C.InputContainer width="15rem">
                    <FormikSelect
                        label="Sale"
                        name="sale"
                        options={formOptions.sale}
                    />
                </C.InputContainer>
            </C.FlexWrapper>
        </Fieldset>
    )
}
