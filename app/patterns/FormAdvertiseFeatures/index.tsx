import React from 'react'
import { Fieldset } from '@components/Fieldset'
import { FormikCheckbox } from '@components/FormikCheckbox'
import { interiorFeatures, externalFeatures } from '../../utils/formCheckboxes'

export default function FormAdvertiseFeatures() {
    return (
        <Fieldset title="Advertise Features">
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
        </Fieldset>
    )
}
