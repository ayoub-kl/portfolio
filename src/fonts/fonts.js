import { createGlobalStyle } from 'styled-components';

import HandWritten from './Clicker Script.woff';
import HandWritten2 from './Clicker Script.woff2';


export default createGlobalStyle`
    @font-face {
        font-family: 'Handwritten';
        src: local('Handwritten'), local('Handwritten'),
        url(${HandWritten2}) format('woff2'),
        url(${HandWritten}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;