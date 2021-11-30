import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    width: 20rem;
    border-radius: .5rem;
    box-shadow: 0 .2rem .6rem rgba(0, 0, 0, .2);
    position: absolute;
    right: 0;
    top: 130%;
    background: var(--white);
`;

export const Tab = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    transition: background-color .2s ease;
    
    &:hover {
        background: #eee;
    }

    .detail-tab-image {
        position: relative;
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
    }
`;