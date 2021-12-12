import styled from 'styled-components';

export const Container = styled.main`
    margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 5rem;
        
        @media (max-width: 1100px) {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 3rem;
        }
        
        @media (max-width: 760px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 490px) {
            grid-template-columns: repeat(1, 1fr);
        }
`;  