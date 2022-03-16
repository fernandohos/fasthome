import React from 'react'
import { Fieldset } from '@components/Fieldset'
import { FormikCheckbox } from '@components/FormikCheckbox'
import formConfig from '@utils/formConfig.json';

export default function FormAdvertiseFeatures() {
    const interiorFeatures = formConfig.form.fields.find(obj => obj.name === 'interior_features')?.options;
    const externalFeatures = formConfig.form.fields.find(obj => obj.name === 'external_features')?.options;

    return (
        <Fieldset title="Advertise Features">
            {interiorFeatures && externalFeatures && (
                <>
                    <FormikCheckbox
                        label="Interior Features"
                        name="interior_features"
                        options={interiorFeatures}
                    />
                    <FormikCheckbox
                        label="External Features"
                        name="external_features"
                        options={externalFeatures}
                    />
                </>
            )
            }
        </Fieldset>
    )
}
