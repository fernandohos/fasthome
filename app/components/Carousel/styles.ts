import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    width: 100%;
`;

export const Control = styled.div<{ direction: 'right' | 'left' }>`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    opacity: .5;
    background: #fffa;
    display: grid;
    place-items: center;
    padding-top: .2rem;
    transition: all ease .2s;
    cursor: pointer;
    transform: ${props => props.direction === 'left' ? 'rotateZ(90deg)' : 'rotateZ(-90deg)'};
    
    &:hover {
        /* background: #fff8; */
        opacity: 1;
    }
`;

export const ThumbsContainer = styled.div`
    width: max-content;
`;

export const ControlsContainer = styled.div`
    width: 97%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    justify-content: space-between;
    `;

export const ImageWrapper = styled(motion.div)`

    display: flex;
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
`;

const activeThumb = css`
    filter: brightness(70%);
    border: 2px solid #0008;
`;

export const Thumb = styled.div<{ isActive: boolean }>`
    display: inline-block;
    width: min-content;
    height: min-content;
    border: 2px solid #fff0;
    margin: 0 .2rem;
    ${props => props.isActive ? activeThumb : ''};
`;

export const ThumbContainer = styled.div`
    position: relative;
    width: 15rem;
    background: #ccc;
    aspect-ratio: 16/9;
`;

export const ThumbsWrapper = styled.div`
        overflow-x: auto;
        margin-top: .4rem;
        &::-webkit-scrollbar {
            display: none;
        }
        max-width: 90rem;
        height: min-content;
    `;

export const ControlsWrapperContainer = styled.div`
    position: relative;
    background: #ccc;
`;