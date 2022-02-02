import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 585px) {
        flex-direction: column;
        align-items: flex-start;
    }

    > p {
        font-size: 1.5rem;
        color: #0006;
    }

    > h1 {
        font-weight: 400;
        font-size: 2.4rem;
    }
`;

export const SortingDropdown = styled.div`
    position: relative;

    .summary {
        display: flex;
        padding: .7rem 2rem;
        border: 1px solid #0003;
        border-radius: .5rem;
        gap: 2rem;
        cursor: pointer;
        background: var(--white);
        
        .sorting-icon {
            position: relative;
            width: 2rem;
            height: 2rem;
        }
    }

    .detail {
        position: absolute;
        z-index: 4;
        top: 110%;
        left: 0;
        width: 100%;
        background: var(--white);
        border: 1px solid #0003;
        border-radius: .5rem;
        box-shadow: 0 2px 4px #0003;

        > p {
            padding: .7rem;
            transition: all ease .2s;
            cursor: pointer;

            &:hover {
                background: #3331;
            }
        }
    }
`;