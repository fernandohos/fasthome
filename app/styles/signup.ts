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

        
    }
`;

export const GoogleButton = styled.button`
    background: #434FAA;
    color: var(--white);
    border: none;
    border-radius: .5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    position: relative;
    cursor: pointer;

    .google-logo-container {
        position: absolute;
        left: 1rem;
        width: 3rem;
        height: 3rem;
    }
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 2rem 0;

    p {
        color: #0008;
        margin: 0 1rem;
        font-style: italic;
    }
    > div {
        flex: 1;
        height: 1px;
        background: #0008;
    }
`;

export const InputContainer = styled.div<{isEmpty: boolean}>`
    position: relative;
    margin-bottom: 2rem;

    input {
        border: 2px solid #0008;
        border-radius: .5rem;
        background: none;
        width: 100%;
        padding: 1rem;
    }

    
    > label {
        transition: all .2s ease;
        position: absolute;
        background: var(--white);
        padding: 0 .5rem;
        ${props => props.isEmpty ? 'top: 50%' : 'top: 0'};
        /* top: 50%; */
        left: 1rem;
        transform: translateY(-50%);
    }
    
    input:focus ~ label {
        top: 0;
    }
`;