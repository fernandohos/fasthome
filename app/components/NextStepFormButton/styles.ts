import styled, { css } from 'styled-components';

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