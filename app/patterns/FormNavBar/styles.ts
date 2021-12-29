import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    width: 60%;
    margin: 2rem auto;
    align-items: center;
`;


export const IconContainer = styled.div`
    position: relative;
    width: 4rem;
    height: 4rem;
    margin: .4rem;
    cursor: pointer;

    /* > a {
        position: relative;
        width: 4rem;
        height: 4rem;
    } */

    &:last-child {
        margin-right: 0;
    }

    &:first-child {
        margin-left: 0;
    }
`;

export const Separator = styled.div<{ active: boolean }>`
    flex: 1;
    height: 2px;
    background: ${({ active }) => active ? 'var(--red2)' : '#aeaeae'};
`;

export const Link = styled.a`
    display: block;
    position: relative;
    width: 4rem;
    height: 4rem;
`;