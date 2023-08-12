import { styled } from "styled-components";
import wave from '../assets/minimalist-waves-5k-vr-1920x1080.jpg'


export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;


    .home{
        width: 100%;
        height: 100vh;
        
        
        z-index: 1;

        background-image: url(${wave});
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center center;

        &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #212121;
        opacity: .6; 
    }
    }

    .content{
        width: 100%;
        height: 100vh;
        z-index: 2;
        position: absolute;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;

        gap: 30px;
    }

    .content a{
        text-decoration: none;
        background-color: #20E198;
        width: 150px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 6px;
        cursor: pointer;
    }

    .content a:hover{
        opacity: 0.9;
    }

    .title{
        font-size: 5rem;
        color: #20E198;
    }

    .subtitle{
        font-size: 1.2rem;
        max-width: 700px;
        width: 100%;
        text-align: center;
        color: white;
    }

    .project{
        width: 100%;
    }

    .content-project{
        width: 100%;
        z-index: 1;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 100px;

        padding-top: 100px;
        padding-bottom: 100px;
        background-color: #fff;
    }

    .img-project img{
        width: 850px;
        border-radius: 6px;
    }

    .description{
        width: 100%;
        max-width: 850px;
        
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .title-description{
        font-size: 2rem;
        font-weight: 600;
    }

    .description-content{
        display: flex;
        flex-direction: column;
        gap: 30px;
        color: #666;
    }

    .description-content p{
        line-height: 1.7
    }

    .tools{
        width: 100%;
        max-width: 850px;
        
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .title-tools{
        font-size: 2rem;
        font-weight: 600;
    }

    .tags-tools{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .tag{
        background-color: #20E198;
        color: white;
        padding: 10px;
        border-radius: 6px;
    }

    .live{
        width: 100%;
        max-width: 850px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .title-live{
        font-size: 2rem;
        font-weight: 600;
    }

    .live-content{
        display: flex;
        gap: 20px;
    }

    .live-content a{
        text-decoration: none;
        background-color: #20E198;
        width: 150px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 6px;
        cursor: pointer;
    }

    .live-content a:hover{
        opacity: 0.9;
    }

    @media screen and (max-width: 850px){
        .img-project img{
            width: 100%;
        }
    }

   
`