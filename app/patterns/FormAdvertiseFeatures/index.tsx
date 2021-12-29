import React from 'react'
import { Fieldset } from '../../components/Fieldset'
import { FormikCheckbox } from '../../components/FormikCheckbox'
import { interiorFeatures, externalFeatures } from '../../utils/formCheckboxes'

export default function FormAdvertiseFeatures() {
    return (
        <Fieldset title="Advertise Features">
            <FormikCheckbox 
                label="Interior Features"
                name="interiorFeatures"
                options={interiorFeatures}
            />
            <FormikCheckbox 
                label="External Features"
                name="externalFeatures"
                options={externalFeatures}
            />
        </Fieldset>
    )
}
