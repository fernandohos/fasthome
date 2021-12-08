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