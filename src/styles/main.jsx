import { styled } from "styled-components";
import wave from '../assets/minimalist-waves-5k-vr-1920x1080.jpg'


export const Home = styled.section`
    width: 100%;
    height: 100vh;
    color: white;
    
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


`

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 2;
    position: absolute;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .typewriter {
        display: inline-block;
    }   

    .p-size {
        font-size: 36px;
        font-weight: 600;
        color: white;
    }

    .typewriter_wrapper {
        font-style: normal;
        font-weight: 600;
        font-size: 5rem;
        letter-spacing: 5px;
        color: #20E198;

        text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
                1px 1px #000 -1px -1px #000, 1px -1px #000, -1px 1px #000;

        border-right: 10px solid;

        width: 100%;
        height: 100%;

        white-space: nowrap;
        overflow: hidden;

        animation:
            typing 2s steps(30),
            cursor .4s step-end infinite alternate;
    }

    .whoam{
        width: 650px;
        letter-spacing: 3px;
        font-weight: 400;
        text-align: center;
    }

    .divider{
        width: 650px;
    }

    .icons{
        display: flex;
        gap: 30px;
        font-size: 2rem;
        color: #20E198;
        
    }

    .icons a{
        color: #20E198;
        text-decoration: none;
    }

    .icons svg:hover{
        opacity: 0.7;
    }

    .icons svg{
        cursor: pointer;
    }
   
    @keyframes cursor {
        50% {
            border-color: transparent;
        }
    }

    @keyframes typing {
        from {
            width: 0
        }
    }

    @media screen and (max-width: 900px){
        .typewriter_wrapper{
            font-size: 3.5rem;
        }

        .whoam{
            width: 60%;
        }

        .divider{
            width: 60%;
        }

    }

    @media screen and (max-width: 600px){
        .typewriter_wrapper{
            font-size: 2.5rem;
        }

        .whoam{
            font-size: 0.7rem;
        }

        .divider{
            width: 60%;
        }

        .icons{
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 417px){

        gap: 20px;

        .typewriter_wrapper{
            font-size: 1.6rem;
        }

        .whoam{
            width: 75%;
        }

        .dividermobile{
            margin: 0px;
        }
    }
`

export const Apresentacao = styled.section`
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;

    z-index: -1;

    .content{
        width: 100%;
        z-index: 1;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 150px;

        padding-top: 100px;
        padding-bottom: 100px;
    }

    .title{
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;

        
    }

    .title p{
        font-size: 3rem;
        letter-spacing: 2px;
        font-weight: 700;
        letter-spacing: 5px;
    }

    .line{
        width: 50px;
        height: 5px;

        background-color: #20E198;
        border-radius: 5px;
    }


    .text-info{
        width: 75%;
        text-align: center;
    }

    .informations{
        width: 80%;

        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 60px;
    }

    .knowme{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .content-knowme{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .content-knowme span{
        font-weight: bold;
    }

    .content-knowme a{
        width: 150px;
        height: 45px;

        background-color: #20E198 !important; 
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    .content-knowme a:hover{
        background-color: #20E198;
        opacity: 0.7;
    }

    .knowme-1, .knowme-2, .knowme-3{
        line-height: 1.7;
        font-size: 1rem;
    }


    .title-knowme{
        font-size: 2rem;
    }

    .skills{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .content-skills{
        display: flex;
        flex-wrap: wrap;

        gap: 10px;
    }

    .skill_skills{
        padding: 10px;
        background-color: #20E198;
        border-radius: 5px;

        color: white;
        font-weight: bold;
    }

    .title-skills{
        font-size: 2rem;
    }

    @media screen and (max-width: 1152px){
        .informations{
            width: 70%;
        }
        .text-info{
            width: 65%;
        }
    }

    @media screen and (max-width: 900px){
        .informations{
            flex-direction: column;
        }

        .knowme{
            width: 100%;
        }

        .skills{
            width: 100%;
        }
    }

    @media screen and (max-width: 600px){
        .title p{
            font-size: 2rem;
        }
    }
`

export const Projetos = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: black;

    z-index: -1;

    .content{
        width: 100%;
        z-index: 1;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 150px;

        padding-top: 100px;
        padding-bottom: 100px;
    }

    .title{
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center; 
    }

    .title p{
        font-size: 3rem;
        letter-spacing: 2px;
        font-weight: 700;
        letter-spacing: 5px;
    }

    .line{
        width: 50px;
        height: 5px;

        background-color: #20E198;
        border-radius: 5px;
    }


    .text-info{
        width: 75%;
        text-align: center;
    }

    .content-projetos{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 100px;
    }

    .project{
        display: flex;  
        align-items: center;
        gap: 50px;
        width: 70%;
    }

    .project img{
        width: 50%;
        border-radius: 6px;
    }

    .project a{
        text-decoration: none;
        background-color: #20E198;
        width: 150px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 6px;
    }

    .project a:hover{
        opacity: 0.7;
    }

    .right{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .title-right{
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1px;
    }

    @media screen and (max-width: 1152px){
        
        .text-info{
            width: 65%;
        }
    }

    @media screen and (max-width: 900px){
        .project img{
            width: 100%;
            height: 100%;
        }

        .project{
            flex-direction: column;
            gap: 40px;
        }

        .right{
            width: 70%;
        }
    }

    @media screen and (max-width: 600px){
        .title p{
            font-size: 2rem;
        }

        .right{
            width: 90%;
        }
    }

`


export const Contato = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    color: black;

    z-index: -1;

    .content{
        width: 100%;
        z-index: 1;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 100px;

        padding-top: 100px;
        padding-bottom: 100px;
    }

    .title{
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;

        
    }

    .title p{
        font-size: 3rem;
        letter-spacing: 2px;
        font-weight: 700;
        letter-spacing: 5px;
    }

    .line{
        width: 50px;
        height: 5px;

        background-color: #20E198;
        border-radius: 5px;
    }


    .text-info{
        width: 75%;
        text-align: center;
    }

    .content-contato{
        width: 100%;
        display: flex;

        align-items: center;
        justify-content: center;

    }

    .button{
        width: 120px;
        height: 50px;
        background-color: #20E198;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }

    .button:hover{
        opacity: 0.7;
    }

    .card{
        width: 50%;

        display: flex;
        flex-direction: column;
        gap: 50px;

        background-color: white;
        border-radius: 5px;
        padding: 30px;
        
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
       
    }

    .form-contato{
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .row{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }

    .row input{
        padding: 20px 15px;
        border: none;
        background-color: #ebebeb;
        border-radius: 5px;
    }

    .row textarea{
        height: 250px;
        padding: 20px 15px;
        border: none;
        background-color: #ebebeb;
        border-radius: 5px;
        resize: none;
    }

    .row label{
        font-size: 1.2rem;
    }

    @media screen and (max-width: 1152px){
        .card{
            width: 70%;
        }

        .text-info{
            width: 65%;
        }
    }

    @media screen and (max-width: 600px){
        .title p{
            font-size: 2rem;
        }

        .card{
            width: 90%;
        }
    }
`

export const Footer = styled.footer`
    width: 100%;
    padding: 30px 0px;
    padding-top: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    .content{
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .name-social{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .name{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .name span{
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 2px;
    }

    .name p{
        color: white;
        font-size: 1rem;
        font-weight: 400;
        width: 50%;
    }

    .social{
        width: 10%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .title-social{
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 2px;
    }

    .medias{
        display: flex;
        gap: 20px;
        font-size: 1.5rem;
        color: #fff;
    }
    
    .medias a{
        text-decoration: none;
        color: #fff;
    }

    .medias svg:hover{
        opacity: 0.7;
    }


    .copyright{
        font-size: 0.8rem;
    }

    @media screen and (max-width: 600px) {
        .name-social{
            flex-direction: column;
            gap: 30px;
        }

        .social{
            width: 100%;
        }

        .name{
            width: 100%;
        }

        .name p{
            width: 100%;
        }
    }
`