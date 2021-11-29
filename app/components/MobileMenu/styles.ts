import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    position: relative;
`;

export const Icon = styled.div<{ show: boolean }>`
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

export const MobileMenu = styled(motion.div)`
    position: absolute;
    right: 0;
    top: 140%;
    width: min(90vw, 20rem);
    padding: 2rem;
    background: var(--white);
    border-radius: .5rem;
    border: .1rem solid rgba(0, 0, 0, .1);
    box-shadow: 0 .2rem .6rem rgba(0, 0, 0, .2);

    ul {
        list-style: none;
        box-sizing: content-box;

        li {
            list-style: none;
            padding: 1rem 0;
            box-sizing: content-box;
            white-space: nowrap;    
            
            
            a {
                text-decoration: none;
            }
        }
    }

    .user-image {
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            height: 4rem;
            width: 4rem;
            background: #ddd;
        }
`;