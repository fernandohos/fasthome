import styled, { keyframes, css } from 'styled-components';



export const Icon = styled.div<{ show: boolean }>`
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    height: 3.2rem;
    width: 3.2rem;
    margin-left: 1.2rem;

    .line {
        width: 3.2rem;
        height: .4rem;
        border-radius: 1rem;
        transform-origin: .1rem;
        transition: all ease .3s;
        background: var(--red2);
    
        &:nth-child(1) {
            transform: ${({ show }) => show ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            opacity: ${({ show }) => show ? '0' : '1'};
        }
        
        &:nth-child(3) {
            transform: ${({ show }) => show ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
    
`;