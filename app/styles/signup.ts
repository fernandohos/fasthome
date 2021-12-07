import styled from 'styled-components';

export const GoogleButton = styled.button`
    background: #434FAA;
    color: var(--white);
    border: none;
    border-radius: .5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    position: relative;
    cursor: pointer;

    .google-logo-container {
        position: absolute;
        left: 1rem;
        width: 3rem;
        height: 3rem;
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