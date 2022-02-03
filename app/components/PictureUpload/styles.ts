import styled from 'styled-components';

export const Container = styled.div`
    margin: 1rem auto;
    cursor: pointer;
    height: 16rem;
    aspect-ratio: 1/1;
    text-align: center;
    border: 2px dashed var(--red2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`;

export const Icon = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
    margin-bottom: 2rem;
`;

export const ProfileImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;