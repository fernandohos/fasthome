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

    .cards-container {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 5rem;
        
        @media (max-width: 970px) {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 3rem;
        }
        
        @media (max-width: 700px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 490px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;