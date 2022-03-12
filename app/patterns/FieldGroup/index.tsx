import React from 'react';
import * as C from './styles';
import { Fieldset } from '@components/Fieldset';
import { FormikInput } from '@components/FormikInput';
import { FormikSelect } from '@components/FormikSelect';
import { FormikCheckbox } from '@components/FormikCheckbox';

type Props = {
    groupName: string;
    fields: {
        name: string;
        label: string;
        group: string;
        type: string;
        options?: {
            label: string;
            value: string;
        }[];
    }[];
}

export function FieldGroupComponent({ groupName, fields }: Props) {
    return (
        <Fieldset title={groupName}>
            {fields.map(field => {
                return field.type === 'checkbox' ? (
                    <FormikCheckbox
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        options={field.options ?? []}
                    />
                ) : (
                    <C.FieldGroup
                        key={field.name}
                        size={field.name === 'title' ? '50rem' : field.type === 'textarea' || field.name === 'address' ? '100%' : '25rem'} >
                        {
                            field.type === 'select' ? (
                                <FormikSelect label={field.label} name={field.name} options={field.options ?? []} />
                            )
                                :
                                (
                                    <FormikInput
                                        label={field.label}
                                        name={field.name}
                                        type={field.type === 'textarea' ? 'text' : field.type}
                                        isTextarea={field.type === 'textarea'}
                                    />
                                )
                        }
                    </C.FieldGroup>
                )
            })}
        </Fieldset >
    )
}


export const FieldGroup = React.memo(FieldGroupComponent, (prevProps, nextProps) => {
    return JSON.stringify(prevProps) !== JSON.stringify(nextProps);
})