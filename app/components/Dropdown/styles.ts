import styled from 'styled-components';

export const Container = styled.div<{isOpen: boolean}>`
    position: relative;

    .summary {
        border-radius: .5rem;
        border: 1px solid #0003;
        padding: .7rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        > p {
            max-width: 90%;
            white-space: nowrap;
            overflow: hidden;
            
        }

        .arrow-container {
            position: relative;
            width: 1.8rem;
            height: 1.8rem;
            user-select: none;
            transition: transform ease .2s;
            transform: ${props => props.isOpen ? 'rotateX(180deg)': 'rotateX(0deg)'};
        }
    }

    .detail {
        position: absolute;
        z-index: 4;
        box-shadow: 0 2px 4px #0005;
        top: 105%;
        left: 0;
        min-width: 100%;
        background: var(--white);
        border: 1px solid #0003;
        border-radius: .5rem;
        padding: .7rem;
    }
`;