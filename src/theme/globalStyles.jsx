import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    input:focus{
      outline: none;
    }

    textarea:focus{
      outline: none;
    }
     
    &::-webkit-scrollbar{
        border: none;
        width: 10px;
        height: 0.1rem;
        border-radius: 5px;

    }

    &::-webkit-scrollbar-thumb{
        background-color: #5b5b5b;
        border-radius: 5px;
    }

  }

  body{
    background: black;
  }

  .float{
    background-color: #20E198;
  }
  .ant-float-btn-body{
    background-color: #20E198 !important;
  }

  .ant-float-btn-body:hover{
    opacity: 0.7;
  }
`;
 
export default GlobalStyle;