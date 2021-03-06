import styled, { css } from 'styled-components';

export const Container = styled.main`
    width: 86%;
    margin: auto;
`;

export const InputContainer = styled.div<{ width?: number | string }>`
    width: ${props => props.width ?? '25rem'};

    @media (max-width: 620px) {
        width: 100%;
    }
`;

export const FlexWrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

const disabledStyle = css`
    cursor: not-allowed;
    filter: brightness(60%);
`;

export const Button = styled.a<{ disabled?: boolean }>`
    display: block;
    padding: .8rem 5rem;
    width: 20rem;
    text-decoration: none;
    background-color: var(--red2);
    color: var(--white);
    border: none;
    border-radius: .5rem;
    margin: auto;
    cursor: pointer;
    ${props => props.disabled && disabledStyle}
`;

export const LoginGroup = styled.div`
    background: #fff;
    border: 1px solid #0003;
    margin-top: 2rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 50vh;
    
    h1 {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 5rem;
    }
`;