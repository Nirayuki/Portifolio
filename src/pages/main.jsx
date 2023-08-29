import React, { useState, useEffect, useRef } from 'react';
import { Header, HeaderMobile } from '../styles/defaultLayout'
import { Home, Content, Apresentacao, Projetos, Contato, Footer } from '../styles/main';
import { Divider, Button, Tooltip, FloatButton, Drawer, message } from 'antd';
import { GithubFilled, LinkedinFilled, InstagramFilled, LaptopOutlined, HomeOutlined, MailOutlined, UserOutlined, MenuOutlined, LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


import todonira from '../assets/todo-nira.PNG';
import nexboard from '../assets/nexboardsite.png';
import emailjs from '@emailjs/browser';

import logo from '../assets/minilogo.png'

const initialValue = {
  user_name: "",
  user_email: "",
  message: ""
}

function Main() {

  const [activeLink, setActiveLink] = useState('#home');
  const [form, setForm] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("Main > section");
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Change this value to adjust the intersection threshold
      };

      const callback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      };

      const observer = new IntersectionObserver(callback, observerOptions);

      sections.forEach(section => {
        observer.observe(section);
      });
    };

    handleScroll(); // Call the function once on mount to set the initial active link

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize); // Remover o event listener no desmontagem
    };
  }, []);

  const handleChange = (ev) => {
    const { name, value } = ev.target

    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    messageApi.open({
      key,
      type: 'loading',
      content: 'Enviado o formulário',
    });
    emailjs.sendForm('service_0doegsc', 'template_mem0s0q', formRef.current, 'qD_lEi_k-vBywYN5d')
      .then((result) => {
        messageApi.open({
          key,
          type: 'success',
          content: 'Formulário enviado!',
          duration: 2,
        });
        setForm(initialValue);
      }, (error) => {
        messageApi.open({
          key,
          type: 'error',
          content: 'Formulário falhou!',
          duration: 2,
        });
      });
  }

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
            <p className='drawer' style={{ marginTop: "50px", marginBottom: "20px", marginLeft: "30px", fontSize: "1.2rem" }}><a style={{ color: "black" }} href="#home"><HomeOutlined /> Home</a></p>
            <p style={{ marginBottom: "20px", marginLeft: "30px", fontSize: "1.2rem" }}><a style={{ color: "black" }} href="#apresentacao"><UserOutlined /> Apresentação</a></p>
            <p style={{ marginBottom: "20px", marginLeft: "30px", fontSize: "1.2rem" }}><a style={{ color: "black" }} href="#projetos"><LaptopOutlined /> Projetos</a></p>
            <p style={{ marginBottom: "20px", marginLeft: "30px", fontSize: "1.2rem" }}><a style={{ color: "black" }} href="#contato"><MailOutlined /> Contato</a></p>
          </Drawer>

        </HeaderMobile>
      )
        : (
          <Header>
            <Tooltip placement='right' title="Home">
              <a href="#home" className={activeLink === "#home" ? "active" : ""}><HomeOutlined /></a>
            </Tooltip>
            <Tooltip placement='right' title="Apresentação">
              <a href="#apresentacao" className={activeLink === "#apresentacao" ? "active" : ""}><UserOutlined /></a>
            </Tooltip>
            <Tooltip placement='right' title="Projetos">
              <a href="#projetos" className={activeLink === "#projetos" ? "active" : ""}><LaptopOutlined /></a>
            </Tooltip>
            <Tooltip placement='right' title="Contato">
              <a href="#contato" className={activeLink === "#contanto" ? "active" : ""}><MailOutlined /></a>
            </Tooltip>
          </Header>
        )
      }
      <>
      {contextHolder}
        <Home id="home">
          <Content>
            <div className="typewriter">
              <p className="typewriter_wrapper">
                Me chamo Aron.
              </p>
            </div>
            <div className='whoam'>
              Tenho 23, sou desenvolvedor Full-Stack e engenheiro de software. Eu gosto de me aventurar no mundo do React e seus components.
            </div>
            <div className='divider'>
              <Divider className='dividermobile' style={{ background: "rgba(255, 255, 255, 0.6)" }} />
            </div>
            <div className='icons'>
              <a href='https://github.com/Nirayuki' target='_blank'><GithubFilled /></a>
              <a href='https://www.linkedin.com/in/aron-felippe-kerkhoven-328aba243/' target='_blank'><LinkedinFilled /></a>
              <a href='https://www.instagram.com/aron_nirayuki/' target='_blank'><InstagramFilled /></a>
            </div>
          </Content>
        </Home>
        <Apresentacao id="apresentacao">
          <div className="content">
            <div className="title">
              <p>SOBRE MIM</p>
              <div className="line"></div>
              <div className='text-info'>
                Aqui você vai encontrar mais informações sobre mim, o que eu faço, e quais são as minhas habilidades em termos de tecnologia e programação.
              </div>
            </div>
            <div className="informations">
              <div className="knowme">
                <div className="title-knowme">
                  Me conheça!
                </div>
                <div className="content-knowme">
                  <p className='knowme-1'>
                    Sou um <span>Desenvolvedor Web Frontend</span> construindo o Front-end de Sites e Aplicações Web que leva ao sucesso do produto como um todo. Confira alguns dos meus trabalhos na seção <span>Projetos</span>.
                  </p>
                  <p className='knowme-2'>
                    Estou aberto para <span>oportunidades de trabalho</span> onde eu possa contribuir, aprender e crescer. Se você tem uma oportunidade que combine com minhas habilidades e experiência então não hesite em entrar em <span>contato</span> comigo.
                  </p>
                  <Button href='#contato' type='primary'>Contato</Button>
                </div>
              </div>
              <div className="skills">
                <div className="title-skills">
                  Minhas Habilidades
                </div>
                <div className='content-skills'>
                  <div className="skill_skills">
                    HTML
                  </div>
                  <div className="skill_skills">
                    CSS
                  </div>
                  <div className="skill_skills">
                    JAVASCRIPT
                  </div>
                  <div className="skill_skills">
                    REACT
                  </div>
                  <div className="skill_skills">
                    NEXT
                  </div>
                  <div className="skill_skills">
                    STYLED-COMPONENTS
                  </div>
                  <div className="skill_skills">
                    RESPONSIVE DESIGN
                  </div>
                  <div className="skill_skills">
                    NODEJS
                  </div>
                  <div className="skill_skills">
                    GIT
                  </div>
                  <div className="skill_skills">
                    GITHUB
                  </div>
                  <div className="skill_skills">
                    MYSQL
                  </div>
                  <div className="skill_skills">
                    FIREBASE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Apresentacao>
        <Projetos id="projetos">
          <div className="content">
            <div className="title">
              <p>PROJETOS</p>
              <div className="line"></div>
              <div className='text-info'>
                Aqui você encontrará alguns dos projetos pessoais e de clientes que criei com cada projeto contendo seu próprio estudo.
              </div>
            </div>
            <div className="content-projetos">
              <div className="project">
                <img src={todonira} />
                <div className="right">
                  <div className="title-right">
                    TODONIRA
                  </div>
                  <p>
                    Todonira é um projeto que criei para afins de estudo com as ferramentas mais requisitadas do mercado de trabalho de tecnologia.
                  </p>
                  <Link to="/todonira">Conhecer</Link>
                </div>
              </div>
              {/* <div className="project">
                <img src={nexboard} />
                <div className="right">
                  <div className="title-right">
                    Nexboard
                  </div>
                  <p>
                    Nexboard é uma ferramente para controle de projetos, essa ferramente foi contruída afim de me auxiliar a controlar meus projetos.
                  </p>
                  <Link to="/nexboard">Conhecer</Link>
                </div>
              </div> */}
            </div>
          </div>
        </Projetos>
        <Contato id="contato">
          <div className="content">
            <div className="title">
              <p>CONTATO</p>
              <div className="line"></div>
              <div className='text-info'>
                Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo, retornarei o mais breve possível.
              </div>
            </div>
            <div className="content-contato">
              <div className="card">
                <form ref={formRef} className='form-contato' onSubmit={handleSubmit}>
                  <div className="row">
                    <label>Nome</label>
                    <input name="user_name" required onChange={handleChange} placeholder='Digite seu nome...' value={form.user_name} />
                  </div>
                  <div className="row">
                    <label>Email</label>
                    <input name="user_email" type="email" required onChange={handleChange} placeholder='Digite seu nome...' value={form.user_email}/>
                  </div>
                  <div className="row">
                    <label>Message</label>
                    <textarea name="message" required onChange={handleChange} placeholder='Digite seu nome...' value={form.message}/>
                  </div>
                  <input className='button' type='submit' value="Submit" />
                </form>

              </div>
            </div>
          </div>
        </Contato>
        <Footer>
          <div className="content">
            <div className="name-social">
              <div className="name">
                <span><img src={logo}/> ARON KERKHOVEN</span>
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


export default Main;