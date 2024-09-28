import React, { useState } from 'react';
import Logo from '../../assets/img/LOGO.png'
import { Link } from 'react-router-dom';
import './sideBar.css';

const SideBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [submenuVisible, setSubmenuVisible] = useState(false);

    const handleMenuClick = (e, linkId) => {
        // Verifica se o link clicado é "Mais Opções"
        if (linkId === 'moreMenu') {
            e.preventDefault(); // Previne o comportamento padrão do link "Mais Opções"
            setSubmenuVisible(!submenuVisible); // Alterna a visibilidade do submenu
        } else {
            setActiveLink(linkId); // Define o link clicado como ativo
        }
    };

    return (
        <div className='sidebar'>
            <div className='logo-container d-flex align-items-center'>
                <a href="/">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            <div className="menu-container">
                <ul className="list-group">
                    <Link
                        to='/geradorSenha'
                        className={`menu-link list-group-item ${activeLink === 'geradorSenha' ? 'active' : ''}`}
                        id="geradorSenha"
                        onClick={(e) => handleMenuClick(e, 'geradorSenha')}
                    >
                        Gerador de Senha
                    </Link>
                    <a
                        href="youtube.html"
                        className={`menu-link list-group-item ${activeLink === 'youtubeImplantacao' ? 'active' : ''}`}
                        id="youtubeImplantacao"
                        onClick={(e) => handleMenuClick(e, 'youtubeImplantacao')}
                    >
                        Youtube Implantação
                    </a>
                    <a
                        href="downloads.html"
                        className={`menu-link list-group-item ${activeLink === 'downloads' ? 'active' : ''}`}
                        id="downloads"
                        onClick={(e) => handleMenuClick(e, 'downloads')}
                    >
                        Downloads
                    </a>
                    <a
                        href="gerador_cdsweb.html"
                        className={`menu-link list-group-item ${activeLink === 'geradorCDSWEB' ? 'active' : ''}`}
                        id="geradorCDSWEB"
                        onClick={(e) => handleMenuClick(e, 'geradorCDSWEB')}
                    >
                        Gerador CDSWEB
                    </a>
                    <a
                        href="#"
                        className={`menu-link list-group-item ${activeLink === 'moreMenu' ? 'active' : ''}`}
                        id="moreMenu"
                        onClick={(e) => handleMenuClick(e, 'moreMenu')}
                    >
                        Comandos
                    </a>
                    <ul className={`submenu list-group ${submenuVisible ? 'd-block' : 'd-none'}`}>
                        <a href="comandosProntos.html" className="menu-link list-group-item">Comandos Prontos</a>
                        <a href="criadorBanco.html" className="menu-link list-group-item">Criador de Banco</a>
                        <a href="insertFilial.html" className="menu-link list-group-item">Inserir Filial</a>
                        <a href="insertFilialCopiando.html" className="menu-link list-group-item">Inserir Filial Copiando de outra</a>
                        <a href="recuperarBancoDoServidor.html" className="menu-link list-group-item">Recuperar Banco do Servidor</a>
                        <a href="filiaisPendentes.html" className="menu-link list-group-item">Filiais Pendentes</a>
                    </ul>
                </ul>
            </div>
        </div >
    );
};

export default SideBar;
