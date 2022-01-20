import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;
    
    .title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-weight: 500;
            font-size: 2rem;
        }

        a {
            border: 1px solid #0005;
            text-decoration: none;
            color: var(--black);
            padding: .3rem 1.5rem;
        }
    }

    .cards-wrapper {
        width: 100%;
        overflow-x: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .cards-container {
        margin-top: 2rem;
        width: max-content;
        display: flex;
        gap: 5rem;
        
        @media (max-width: 970px) {
            gap: 3rem;
        }
    }
`;