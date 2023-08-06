import { styled } from "styled-components";

export const Header = styled.header`
    width: 100px;
    height: 350px;

    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 999;
    
    
    top: 100px;
    left: 10px;
    gap: 20px;
    

    a{
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        text-decoration: none;
        
        color:  white;
        font-size: 1.5rem;
        cursor: pointer;
        width: 50px;
        height: 50px;
        background-color: #20E198;

        
    }

    a:hover{
        opacity: 0.7;
    }

    a.active{
        color: white;
    }
    
`

export const HeaderMobile = styled.header`
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: absolute;
    color: white;

    right: 50px;
    top: 20px;

    font-size: 2rem;
    z-index: 999;

    .drawer{
        font-size: 1.5rem;
        text-decoration: none;
    }
`