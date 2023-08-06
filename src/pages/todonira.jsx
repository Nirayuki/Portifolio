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
                                <p>Todonira é um projeto open source (codigo aberto) com uma interfáce simples e intuítiva. Eu desenvolvi esse projeto com o intuito de criar um site de lista de afazeres que não tivesse necessidade de fazer login e registro.</p>
                                <p>Esse projeto tem uma interfáce simples, pois, percebi que muitas das vezes as pessoas desistem de navegar nos sites por serem cheio de coisas desnecessárias. Por conta disso, todonira veio com a ideia de ser fácil, simples e acessível.</p>
                                <p>Para poder utilizar o todonira é simples, basta você entrar no site, criar uma room, você descide se vai ser privada ou pública. Agora só basta guardar o link da URL da sua sala e você terá uma lista de afazeres simples e rápida.</p>
                                <p>Sinta-se livre para olhar o site clicando no botão Link do Projeto.</p>
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