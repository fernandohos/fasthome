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
    width: min(90vw, 25rem);
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
                color: var(--black);
            }
        }
    }
`;

const close = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(90deg);
    }
`;

const open = keyframes`
    from {
        transform: rotate(90deg);
    }
    to {
        transform: rotate(0);
    }
`;

const userInfoClosed = keyframes`
    from {
        max-height: 100px;
    }
    to {
        max-height: 0;
    }
`;

const userInfoOpened = keyframes`
    from {
        max-height: 0;
    }
    to {
        max-height: 100px;
    }
`;


export const UserInfo = styled.div<{ opened: boolean | null }>`
    margin-bottom: 1rem;

    .user-info-summary {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .user-image {
                position: relative;
                border-radius: 50%;
                overflow: hidden;
                height: 3.8rem;
                width: 3.8rem;
                background: #ddd;
        }

        .arrow-icon {
            position: relative;
            width: 1.6rem;
            height: 5rem;
            transform: rotate(90deg);
            animation: ${({ opened }) => opened !== null ? opened ? open : close : null} .3s forwards;
        }
    }
`;

export const UserInfoDetail = styled(motion.div)`
    overflow: hidden;
`;

export const UserDetailTab = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    border-radius: .5rem;
    margin: .3rem 0;
    transition: background-color ease .3s;
    text-decoration: none;
    color: var(--black);

    .detail-tab-image {
        position: relative;
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
    }

    &:hover {
        background: #eee;
    }
`;