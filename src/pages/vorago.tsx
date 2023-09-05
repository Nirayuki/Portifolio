import React from 'react';
import { DefaultLayoutProjects } from '../components/defaultLayoutProjects';
import { Container } from "../styles/projects";

import vorago from '../assets/vorago.PNG';

import { Link } from 'react-router-dom';

function Vorago(){
    return(
        <DefaultLayoutProjects>
            <Container>
                <div className="home">
                    <div className="content">
                        <div className="title">
                            Vorago
                        </div>
                        <div className="subtitle">
                            Essa página contém informações sobre o projeto Vorago. Você descubrirá as tecnologias que foram usadas nesse projeto
                        </div>
                        <a href="https://vorago.com.br/" target="_blank">Link do Projeto</a>
                    </div>
                </div>
                <div className="project">
                    <div className="content-project">
                        <div className="img-project">
                            <img src={vorago} />
                        </div>
                        <div className="description">
                            <div className="title-description">
                                Visão Geral
                            </div>
                            <div className="description-content">
                                <p>Vorago é um site estilo portfólio empresarial pedido sobre demanda pela empresa Vorago Construtora. O site tem como intuito mostrar os trabalhos da empresa.</p>
                                <p>Foi utilizado uma tecnologia de dashboard (painel de administrador) para que o dono da empresa possa cadastrar seus dados, deletar seus dados e pesquisar seus dados da forma como ele quiser.</p>
                                <p>Dentro do site também tem um sistema simples de imobiliária onde é anunciado lotes, casas, apartamentos para venda. O site também contém páginas dinâmicas e responsivas.</p>
                                <p>Ficou interessado? Clique no botão "link do projeto" para explorar e conhecer o site Vorago.</p>
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
                                <a href="https://vorago.com.br/" target="_blank">Link do Projeto</a>
                                <Link to="/">Voltar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DefaultLayoutProjects>
    )
}

export default Vorago;