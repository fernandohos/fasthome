import styled from 'styled-components';

export const Container = styled.div<{ isEmpty: boolean, error: boolean}>`
    position: relative;
    margin: 2rem 0 ${props => props.error ? '.2rem' : '2rem'};

    input, textarea {
        border: 2px solid ${props => props.error ? 'var(--red2)' : '#0008'};
        border-radius: .5rem;
        background: none;
        width: 100%;
        padding: 1rem;
    }

    .password-icon-container {
        cursor: pointer;
        position: absolute;
        right: 1rem;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 2rem;
        height: 2rem;
        opacity: .7;
    }

    .password-icon {
        position: relative;
        width: 2rem;
        height: 2rem;
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
        cursor: text;
    }
    
    input:focus ~ label, textarea:focus ~ label {
        top: 0;
    }
`;

export const ErrorMessage = styled.p`
    color: var(--red2);
    margin-bottom: 2rem;
`;