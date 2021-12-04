import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: var(--white);
    border: 1px solid #0003;
    margin: 4rem 0;
    display: flex;
    justify-content: space-between;
    
    
    .content {
        padding: 2rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > button {
            width: max-content;
        }

        h3 {
            font-size: 2.3rem;
            font-weight: 500;
        }
        
        p {
            margin-top: 2rem;
            color: #0008;
        }
    }

@media (max-width: 888px) {
    background-image: url('/images/searching-on-map.png');
    background-repeat:  no-repeat;
    background-size: cover;
    background-position: center top;
    padding: 0;
    height: 20rem;

    @media (max-width: 430px) {
        height: 22rem;
    }

    > .content {
        width: 100%;
        background: #fff4;
        backdrop-filter: blur(1px);
        
        p {
            color: #000c;
        }

    }

    .image-container {
        display: none;
    }
}
    .image-container {
        position: relative;
        height: calc(min(35vw, 47.5rem) * .5625);
        aspect-ratio: 16/9;
    }
`;