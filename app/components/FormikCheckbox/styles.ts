import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 2rem 0;

    input {
        display: none;
    }

    .checkbox {
        display: flex;
        align-items: center;
        gap: .6rem;
        margin: 1rem 0;
    }

    label.input {
        display: inline-block;
        border-radius: .3rem;
        width: 2rem;
        height: 2rem;
        background: var(--white);
        border: 1px solid #0005;
        position: relative;
        transition: all ease .2s;
    }

    input:checked ~ label.input {
        background: red;
        position: relative;
        border: none;

        &:after {
            content: '';
            display: block;
            background-image: url('/images/check-icon.svg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            width: 70%;
            height: 50%;
            position: absolute;
            transform: translateX(-50%) translateY(-50%);
            top: 50%;
            left: 50%;

        }
    }
`;