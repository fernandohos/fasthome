import styled from 'styled-components';

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
        }
    }
`;

export const ProfileTabContainer = styled.div`
    position: relative;

`;