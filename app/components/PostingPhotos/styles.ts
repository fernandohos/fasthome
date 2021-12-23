import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    flex-direction: column;

    .image-container {
        position: relative;
    }

    .image-icon {
        width: 5rem;
        height: 5rem;
        margin-bottom: 2rem;
    }

    .camera-icon {
        width: 2.5rem; 
        height: 2.5rem;
    }

    > p {
        font-weight: 500;
    }

    > button {
        display: flex;
        align-items: center;
        padding: 1rem;
        gap: .5rem;
        background: var(--red2);
        border: none;
        border-radius: .5rem;
        margin-top: 2rem;
        color: var(--white);
        cursor: pointer;
    }
`;

export const DropContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-weight: 500;
    font-size: 1.8rem;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    aspect-ratio: 48/18;
    width: 100%;
    border: 2px dashed var(--red2);
    border-radius: .5rem;

    .plus-icon {
        position: relative;
        width: 5rem;
        height: 5rem;
    }
    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        aspect-ratio: 32/27;
    }   
`;

export const ImagesContainer = styled.div`
    aspect-ratio: 48/18;
    display: grid;
    margin-top: 2rem;
    border: 2px dashed var(--red2);
    border-radius: .5rem;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    
    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        aspect-ratio: 32/27;
    }
`;

export const DefaultImage = styled.div`
    background: #0009;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    font-weight: 300;
    color: var(--white);
`;