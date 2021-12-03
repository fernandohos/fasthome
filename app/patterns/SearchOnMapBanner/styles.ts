import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: var(--white);
    border: 1px solid #0003;
    margin: 4rem 0;
    display: flex;
    justify-content: space-between;
    
    > .content {
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

    .image-container {
        position: relative;
        height: calc(min(35vw, 47.5rem) * .5625);
        aspect-ratio: 16/9;
    }
`;