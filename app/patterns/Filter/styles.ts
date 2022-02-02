import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: var(--white);
    border-radius: .5rem;
    border: 1px solid #0003;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    
    > div {
        width: 20rem;
    }

    @media (max-width: 654px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        > div {
            width: 100%;
        }
    }

    @media (max-width: 340px) {
        grid-template-columns: repeat(1, 1fr);
    }

    .filter-icon-container {
        position: relative;
        width: 3rem;
        height: 3rem;
        justify-self: flex-end;
        cursor: pointer;

        @media (max-width: 654px) {
            display: none;
        }
    }
`;

export const Input = styled.input`
    border: 1px solid #0003;
    border-radius: .25rem;
    background: none;
    padding: .5rem;
    width: 100%;
`;

export const PriceDropdown = styled.div`
    > h2 {
        font-weight: 400;
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
    }

    .input-container {
        display: flex;
        gap: 1rem;
    }

    .buttons-container {
        display: flex;
        margin-top: 1.5rem;
        width: 100%;
        justify-content: space-between;

        .apply {
            background: var(--blue2);
            border-radius: .25rem;
            text-transform: uppercase;
            color: var(--white);
            border: none;
            padding: .5rem;
            cursor: pointer;
        }

        .reset {
            border: none;
            background: none;
            color: var(--red2);
            cursor: pointer;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 1.5rem;
    width: 100%;
    justify-content: space-between;

    .apply {
        background: var(--blue2);
        border-radius: .25rem;
        text-transform: uppercase;
        color: var(--white);
        border: none;
        padding: .5rem;
        cursor: pointer;
    }

    .reset {
        border: none;
        background: none;
        color: var(--red2);
        cursor: pointer;
    }
`;

export const RoomCount = styled.div`
    > h2 {
        font-weight: 400;
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
    }

    .numbers-container {
        display: grid;
        gap: .4rem;
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const RadioInput = styled.div`
    input {
        display: none;
    }
    
    input:checked ~ label {
        border: 1px solid var(--blue2);
        background: var(--blue);
    }

    label {
        box-sizing: border-box;
        padding: .3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #0003;
        border-radius: .25rem;
    }
`;

export const HousingDropdown = styled.div`
    > p {
        padding: .7rem;

        &:hover {
            background: #8881;
        }
    }
`;

