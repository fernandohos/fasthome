import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 70%;
    max-width: 50rem;
    height: 4rem;
    background: #fff;
    display: flex;
    align-items: center;
    border-radius: .5rem;
    position: relative;

    input {
        width: 100%;
        height: 100%;
        border: none;  
        outline: none;
        padding-left: 1rem;
        border-radius: .5rem;

        &:focus~ul {
            display: block;
        }
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

    ul {
        display: none;
        position: absolute;
        top: 100%;
        z-index: 99;
        list-style: none;
        left: 0;
        width: 100%;
        height: max-content;
        /* background: var(--white);
        filter: brightness(90%); */
        border-radius: 0 0 .5rem .5rem;
        overflow: hidden;
        box-shadow: 0 3rem 3rem #444;
        
        li {
            background: var(--white);
            filter: brightness(95%);
            list-style: none;
            padding: .5rem;
            cursor: pointer;
            color: var(--gray);

            .highlight {
                color: var(--black);
                font-weight: 500;
            }

            &:hover {
                filter: brightness(85%);
            }

            &.active {
                /* background: blue; */
                filter: brightness(80%);
            }
        }
        
    }

`;