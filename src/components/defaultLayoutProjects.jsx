import React, { useState, useEffect } from "react";
import { Header, HeaderMobile } from "../styles/defaultLayout";
import { Footer } from "../styles/main";
import { Divider, Tooltip, FloatButton, Drawer} from 'antd';
import { GithubFilled, LinkedinFilled, InstagramFilled, LaptopOutlined, HomeOutlined, MailOutlined, UserOutlined, MenuOutlined, LoadingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


export const DefaultLayoutProjects = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // Remover o event listener no desmontagem
        };
    }, [])


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            {width <= 768 ? (
                <HeaderMobile>
                    <MenuOutlined onClick={showDrawer} />
                    <Drawer closable={width <= 600 ? true : false} placement="right" onClose={onClose} open={open}>
                        <p className='drawer' style={{ marginTop: "50px", marginBottom: "20px", marginLeft: "30px", fontSize: "1.2rem" }}><a style={{ color: "black" }} href="/"><HomeOutlined /> Home</a></p>
                        <p style={{ marginBottom: "20px", marginLeft: "30px", fontSize: "1.2rem" }}><a style={{ color: "black" }} href="/"><UserOutlined /> Apresentação</a></p>
                        <p style={{ marginBottom: "20px", marginLeft: "30px", fontSize: "1.2rem" }}><a style={{ color: "black" }} href="/"><LaptopOutlined /> Projetos</a></p>
                        <p style={{ marginBottom: "20px", marginLeft: "30px", fontSize: "1.2rem" }}><a style={{ color: "black" }} href="/"><MailOutlined /> Contato</a></p>
                    </Drawer>

                </HeaderMobile>
            )
                : (
                    <Header>
                        <Tooltip placement='right' title="Home">
                            <Link to="/#home" href="#home" ><HomeOutlined /></Link>
                        </Tooltip>
                        <Tooltip placement='right' title="Apresentação">
                            <Link to="/#apresentacao" href="#apresentacao" ><UserOutlined /></Link>
                        </Tooltip>
                        <Tooltip placement='right' title="Projetos">
                            <Link to="/#projetos" href="#projetos"><LaptopOutlined /></Link>
                        </Tooltip>
                        <Tooltip placement='right' title="Contato">
                            <Link to="/#contato" href="#contato" ><MailOutlined /></Link>
                        </Tooltip>
                    </Header>
                )
            }
            <>
                {children}
                <Footer>
                    <div className="content">
                        <div className="name-social">
                            <div className="name">
                                <span>ARON KERKHOVEN</span>
                                <p>Um desenvolver frontend focado em desenvolvimento de sites, costruindo o back-end e front-end de aplicações web.</p>
                            </div>
                            <div className="social">
                                <div className="title-social">
                                    Social
                                </div>
                                <div className="medias">
                                    <a href='https://github.com/Nirayuki' target='_blank'><GithubFilled /></a>
                                    <a href='https://www.linkedin.com/in/aron-felippe-kerkhoven-328aba243/' target='_blank'><LinkedinFilled /></a>
                                    <a href='https://www.instagram.com/aron_nirayuki/' target='_blank'><InstagramFilled /></a>
                                </div>
                            </div>
                        </div>
                        <Divider style={{ background: "rgba(255, 255, 255, 0.6)" }} />
                        <div className="copyright">
                            © Copyright 2023. Made by Aron Kerkhoven
                        </div>
                    </div>
                </Footer>
                <FloatButton.BackTop type='primary' className='float' />
            </>

        </>
    )
}