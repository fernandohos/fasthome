import styled from 'styled-components';

export const Container = styled.main`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: grid;
    place-items: center;

    .icon-container {
        position: relative;
        width: 6rem;
        height: 6rem;
    }

    p {
        color: #0008;
        text-align: center;
        font-size: 2rem;
        margin-top: 2rem;

    }

`;