import styled from 'styled-components';

export const Container = styled.div<{isPasswordEqual?: boolean, isEmpty: boolean}>`
    position: relative;
    margin-bottom: 2rem;

    input {
        border: 2px solid ${({isPasswordEqual = true}) => isPasswordEqual ? '#0008' : 'var(--red2)'};
        border-radius: .5rem;
        background: none;
        width: 100%;
        padding: 1rem;
    }

    
    > label {
        transition: all .2s ease;
        position: absolute;
        background: var(--white);
        padding: 0 .5rem;
        ${props => props.isEmpty ? 'top: 50%' : 'top: 0'};
        left: 1rem;
        transform: translateY(-50%);
        user-select: none;
    }
    
    input:focus ~ label {
        top: 0;
    }
`;