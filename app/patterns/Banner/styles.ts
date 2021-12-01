import styled from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    background-image: url('/images/banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: var(--white);
        font-size: 4.4rem;
        font-weight: 400;
        text-align: center;
        margin-top: 3rem;
    }

`;

export const InputContainer = styled.div`
    width: 70%;
    max-width: 50rem;
    height: 4rem;
    background: #fff;
    display: flex;
    align-items: center;
    border-radius: .5rem;
    overflow: hidden;

    input {
        width: 100%;
        height: 100%;
        border: none;  
        outline: none;
        padding-left: 1rem;
    }

    .icon-container {
        height: 100%;
        padding: .7rem;
        aspect-ratio: 1/1;
        border: none;
        background: transparent;
        cursor: pointer;

        .icon {
            position: relative;
            width: 100%;
            aspect-ratio: 1/1;
        }
    }

`;