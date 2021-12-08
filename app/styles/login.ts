import styled from 'styled-components';

export const LoginForm = styled.div`
    .link {
        color: var(--blue2);
        text-align: center;
        text-decoration: none;
        cursor: pointer;
    }
    .signup-link {
        text-align: center;
    }
`;

export const LoginButton = styled.button`
    width: 100%;
    height: 4rem;
    background: var(--blue2);
    border: none;
    margin: 2rem 0;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: var(--white);
    cursor: pointer;
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