import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.header`
    background: var(--white);
    padding: 1rem 6vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-nav {
        display: flex;
    }
    
    .logo-container {
        position: relative;
        height: 4rem;
        width: 12rem;
        cursor: pointer;
    }

    .advertise-user-profile {
        display: flex;
        align-items: center;
        
        .user-image-container {
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            height: 4rem;
            width: 4rem;
            background: #ddd;
            margin-left: 2rem;
            cursor: pointer;
        }
    }
`;

export const ProfileTabContainer = styled.div`
    position: relative;

`;

export const Button = styled.a`
    display: block;
    padding: .8rem 1.5rem;
    text-decoration: none;
    background-color: var(--red2);
    color: var(--white);
    border: none;
    border-radius: .5rem;
    margin: auto;
    cursor: pointer;
`;