import React from 'react'
import WebmailLogo from '../../assets/img/webmail_icon.png'
import TrelloLogo from '../../assets/img/trello_logo.png'
import CalendarLogo from '../../assets/img/google_calendar_logo.png'
import SintegraLogo from '../../assets/img/sintegra.png'
import EfiscoLogo from '../../assets/img/EFISCO.png'

const PaginaIInicial = () => {
  return (
    <div className="content" id="conteudo">
            <div className="welcome-message">
              <h1>BEM VINDO A CDS IMPLANTAÇÃO!</h1>
            </div>
            <div className="subtitle useful-title">Acesse os nossos servidores:</div>
            <div className="server-icons">
              <a href="http://216.245.218.2:800/" target="_blank" className="server-link">
                <i className="bi bi-server server-icon"></i>
                <div className="server-description">216</div>
              </a>
              <a href="http://63.143.45.98:800/" target="_blank" className="server-link">
                <i className="bi bi-server server-icon"></i>
                <div className="server-description">63</div>
              </a>
              <a href="http://63.143.45.98:800/Multiloja" target="_blank" className="server-link">
                <i className="bi bi-server server-icon"></i>
                <div className="server-description">Multiloja</div>
              </a>
              <a href="http://74.63.213.142:800/" target="_blank" className="server-link">
                <i className="bi bi-server server-icon"></i>
                <div className="server-description">74</div>
              </a>
              <a href="http://cdsnuvem.com.br" target="_blank" className="server-link">
                <i className="bi bi-server server-icon"></i>
                <div className="server-description">CDS Nuvem</div>
              </a>
            </div>
            <div className="useful-links">
              <div className="useful-title">Links Úteis</div>
              <div className="link-icons">
                <a href="https://webmail-seguro.com.br/cdssistemas.com.br/" target="_blank" className="link-item">
                  <img src={WebmailLogo} alt="WebMail CDS Logo" className="link-icon" />
                    <div className="link-description">WebMail</div>
                </a>
                <a href="https://trello.com/" target="_blank" className="link-item">
                  <img src={TrelloLogo} alt="Trello CDS Logo" className="link-icon" />
                  <div className="link-description">Trello</div>
                </a>
                <a href="https://calendar.google.com/" target="_blank" className="link-item">
                  <img src={CalendarLogo} alt="Calendar CDS Logo" className="link-icon" />
                  <div className="link-description">Agenda</div>
                </a>
                <a href="https://efisco.sefaz.pe.gov.br/sfi_trb_gcc/PRConsultarExtratoCadastroContribuinteSINTEGRA" target="_blank" className="link-item">
                  <img src={SintegraLogo} alt="Calendar CDS Logo" className="link-icon" />
                  <div className="link-description">Sintegra PE</div>
                </a>
                <a href="https://efisco.sefaz.pe.gov.br/sfi_com_sca/PRMontarMenuAcesso" target="_blank" className="link-item">
                  <img src={EfiscoLogo} alt="Calendar CDS Logo" className="link-icon" />
                  <div className="link-description">Efisco</div>
                </a>
              </div>
            </div>
          </div>
  )
}

export default PaginaIInicial