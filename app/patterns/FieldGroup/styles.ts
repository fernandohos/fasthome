import styled from 'styled-components';

export const FieldGroup = styled.div<{ size: string }>`
    width: ${({ size }) => size};

    @media(max-width: 630px) {
        width: 100%;
    }
`;