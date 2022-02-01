import styled from 'styled-components';

export const Container = styled.footer`
    display: grid;
    background: var(--gray);
    grid-template-columns: repeat(3, 1fr);
    margin-top: 4rem;
    grid-column-gap: 5rem;
    padding: 5rem 6%;

    @media (max-width: 540px) {
        grid-column-gap: 2rem;
    }

    @media (max-width: 440px) {    
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 3rem;
    }

    @media (max-width: 325px) {    
        grid-template-columns: 1fr;
        grid-row-gap: 3rem;
    }
`;

export const FooterList = styled.div`
    h3 {
        color: var(--white);
        font-weight: 400;
        font-size: 2rem;
    }

    ul {
        list-style: none;
        margin-top: 1rem;
        
        li {
            padding: .4rem 0;

            a {
                text-decoration: none;
                color: #FFF6;
            }
        }
    }
`;