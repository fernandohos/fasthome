import styled from 'styled-components';

export const Nav = styled.nav`

    ul {
        display: flex;
        list-style: none;
        height: 100%;

        li {
            padding: .7rem 1.5rem;

            
            a {
                text-decoration: none;
                color: var(--black);
                font-weight: 400;
                font-size: 1.6rem;

                &:hover {
                    color: var(--gray);
                    text-decoration: underline;
                }
            }
        }
    }

`;