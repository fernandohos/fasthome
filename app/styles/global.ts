import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        --white: #FFFFFF;
        --blue: #9FCBFF;
        --blue2: #68ACFD;
        --green: #8DD69C;
        --green2: #31AA52;
        --yellow: #FECD4C;
        --red: #E75353;
        --red2: #E02828;
        --dark-blue: #434FAA;
        --gray: #2D363C;
        --black: #000000;
        --bg: #F8F8F8;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: var(--bg);
    }
`;