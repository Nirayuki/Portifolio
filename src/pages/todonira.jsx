import React from "react";
import { DefaultLayoutProjects } from "../components/defaultLayoutProjects";
import { Container } from "../styles/projects";
import todonira from '../assets/todonira.png';
import { Link } from "react-router-dom";

function TodoNira() {
    return (
        <DefaultLayoutProjects>
            <Container>
                <div className="home">
                    <div className="content">
                        <div className="title">
                            Todonira
                        </div>
                        <div className="subtitle">
                            Essa página contém informações sobre o projeto Todonira. Você descubrirá as tecnologias que foram usadas nesse projeto
                        </div>
                        <a href="https://todonira.vercel.app/" target="_blank">Link do Projeto</a>
                    </div>
                </div>
                <div className="project">
                    <div className="content-project">
                        <div className="img-project">
                            <img src={todonira} />
                        </div>
                        <div className="description">
                            <div className="title-description">
                                Visão Geral
                            </div>
                            <div className="description-content">
                                <p>Todonira é um projeto open source (código aberto), com uma interface simples e intuitiva. Desenvolvi esse projeto com o intuito de criar um site de organização  e gerenciamento de tarefas, que não tivesse necessidade de fazer um login.</p>
                                <p>Esse projeto foi desenvolvido com uma interface simples, pois ao analisar a dinâmica de aplicativos semelhantes, percebi que muitas vezes os usuários desistem de utilizar esses aplicativos por terem uma interface muito complexa. Por conta disso, Todonira é criada com o intuito de ser um gerenciador de tarefas simples e de fácil  acesso.</p>
                                <p>Para poder utilizá-lo é bem  simples, basta entrar no site e criar uma sala (Room), que pode ser tanto pública (sem a necessidade de login) ou privada. Depois, só basta guardar o link da URL da sua sala, para que você crie sua lista de afazeres, de forma simples e rápida. </p>
                                <p>Ficou interessado? Clique no botão "link do projeto" para explorar o site Todonira.</p>
                            </div>
                        </div>
                        <div className="tools">
                            <div className="title-tools">
                                Tecnologias
                            </div>
                            <div className="tags-tools">
                                <div className="tag">
                                    HTML
                                </div>
                                <div className="tag">
                                    STYLED-COMPONENTS
                                </div>
                                <div className="tag">
                                    GIT
                                </div>
                                <div className="tag">
                                    GITHUB
                                </div>
                                <div className="tag">
                                    JAVASCRIPT
                                </div>
                                <div className="tag">
                                    REACT
                                </div>
                                <div className="tag">
                                    FIREBASE
                                </div>
                            </div>
                        </div>
                        <div className="live">
                            <div className="title-live">
                                Ver Projeto
                            </div>
                            <div className="live-content">
                                <a href="https://todonira.vercel.app/" target="_blank">Link do Projeto</a>
                                <Link to="/">Voltar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DefaultLayoutProjects>
    )
}

export default TodoNira;