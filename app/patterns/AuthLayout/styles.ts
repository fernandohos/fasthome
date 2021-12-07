import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .close-btn {
        cursor: pointer;
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: #0008;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        color: var(--bg);
    }

    .content {
        border: 1px solid #0002;
        width: 80vw;
        height: auto;
        min-height: 80vh;
        display: flex;
        background: var(--white);
    }

`;

export const Banner = styled.div`
    @media (max-width: 850px) {
        display: none;
    }

    flex: 7;
    border-right: 1px solid #0002;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 1rem 0;

    .container {
        width: 80%;
    }

    .logo {
        position: relative;
        margin: 0 auto;
        width: 10rem;
        aspect-ratio: 9/12;
    }

    .texts {
        text-align: center;
        font-size: 1.8rem;
        margin-top: 3rem;

        p {
            color: var(--black);
        }
        p + p {
            font-weight: 300;
            color: #000a;
            margin-top: 2rem;
        }
    }

    .cards {
        margin-top: 3rem;
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;

        .card {
            .image-container {
                position: relative;
                width: 5rem;
                height: 5rem;
                margin: auto;
            }
            p {
                margin-top: 1rem;
                text-align: center;
            }
        }
    }
`;

export const Form = styled.main`
    flex: 5;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        width: 80%;

        > p {
            color: var(--red2);
            margin: -1rem 0 1rem 0;
            font-style: italic;
        }
        
    }
`;