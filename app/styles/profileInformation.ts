import styled from 'styled-components';

export const Container = styled.div`

`;

export const ProfileInfo = styled.div`
    background: var(--white);
    width: 88%;
    margin: auto;
    margin-top: 2rem;
    padding: 2rem;

    h1 {
        font-weight: 500;
        font-size: 1.8rem;
    }

    .button {
        margin: 2rem auto 0;
        width: min-content;
        cursor: pointer;

        > button {
            padding: 1rem 4rem;
        }
    }
`;

export const InputContainer = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 30rem 30rem;
    grid-column-gap: 2rem;
`;

export const Textarea = styled.div<{isEmpty: boolean}>`
    position: relative;

    textarea {
        border: 2px solid #0008;
        border-radius: .5rem;
        background: none;
        width: 100%;
        height: 10rem;
        padding: 1rem;
        resize: vertical;
    }
    textarea:focus ~ label {
        top: 0;
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
`;

export const NotLogged = styled.div`
    text-align: center;
`;