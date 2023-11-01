import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {   
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -ms-overflow-style: none; // IE and Edge
        scrollbar-width: none; // Firefox

        &::before,
        &::after {
            box-sizing: border-box;
        }
    }

    img {
        border: 0;
    }

    a {
        text-decoration: none;
    }

    select,
    input,
    textarea {
        font-size: 16px;
    }

    input,
    button {
        -webkit-appearance: none;
    }

    input::-webkit-contacts-auto-fill-button {
        position: absolute;
        right: 0;
        display: none !important;
        pointer-events: none;
        visibility: hidden;
    }

    input {
        background-color: transparent;
        background-image: none;
        border: 0;
        border-bottom:1px solid #000;
    }

    button {
        cursor: pointer;
        user-select: none;
        background-color: transparent;
        border: 0;

        &:disabled {
            cursor: not-allowed;
        }
    }

    input:is([type='button'], [type='submit'], [type='reset']),
    input[type='file']::file-selector-button,
    button {
        color: initial;
    } // override safari default blue

    html,
    body,
    button,
    input,
    textarea {
        font-family: Poppins, Arial, PingFangSC-Regular, 'Microsoft YaHei', sans-serif;
    }

    html{
        scrollbar-gutter: stable both-edges;
    }

    body {
        background-color: rgb(28, 26, 24);
    }

    ::-webkit-scrollbar {
        background-color: transparent;
        width: 7px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 7px;
        background: #2E2C30;
    }
    
`;

export default GlobalStyle;
