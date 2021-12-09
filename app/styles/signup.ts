import styled from 'styled-components';

export const LoginLink = styled.div`
    text-align: center;
    margin-top: 2rem;
    span a {
        color: var(--blue2);
        text-decoration: none;
    }
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 2rem 0;

    p {
        color: #0008;
        margin: 0 1rem;
        font-style: italic;
    }
    > div {
        flex: 1;
        height: 1px;
        background: #0008;
    }
`;

export const SignupButton = styled.button`
    width: 100%;
    height: 4rem;
    background: var(--blue2);
    border: none;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: var(--white);
    cursor: pointer;
`;