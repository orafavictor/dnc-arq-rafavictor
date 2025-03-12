import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './Footer.css';
import Logo from '../../assets/dnc-logo.svg';
import BrazilFlag from '../../assets/brazilFlag.svg';
import UsaFlag from '../../assets/usaFlag.svg';
import FacebookIcon from '../../assets/facebookIcon.svg';
import InstagramIcon from '../../assets/instagramIcon.svg';
import TwitterIcon from '../../assets/twitterIcon.svg';
import LinkedinIcon from '../../assets/linkedinIcon.svg';

// Button
import Button from '../Button/Button';

// Context
import { AppContext } from '../../contexts/AppContext';

function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
  return (
    <footer>
      <div className="container">
        <div className="dFlex jcSpaceBetween mobileFdColumn">
            <div className="footerLogoCol">
                <img src={Logo} className="footerLogo"></img>
                <p className="gray1Color">
                    {appContext.languages[appContext.language].general.footerLogoText}
                </p>
                <div className='dFlex socialLinks'>
                    <a href="https://www.google.com/" target="_blank">
                        <img src={FacebookIcon}></img>    
                    </a>
                    <a href="https://www.google.com/" target="_blank">
                        <img src={TwitterIcon}></img>    
                    </a> 
                    <a href="https://www.google.com/" target="_blank">
                        <img src={LinkedinIcon}></img>    
                    </a> 
                    <a href="https://www.google.com/" target="_blank">
                        <img src={InstagramIcon}></img>    
                    </a>            
                </div>
            </div>
            <div className="dFlex mobileFdColumn">
                <div className="footerCol">
                    <h3>{appContext.languages[appContext.language].general.pages}</h3>
                    <ul>
                        <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                        <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                        <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                        <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                    </ul>
                </div>
                <div className="footerCol">
                    <h3>{appContext.languages[appContext.language].general.contact}</h3>
                    <p className="gray1Color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                    <p className="gray1Color">suporte@escoladnc.com.br</p>
                    <p className="gray1Color">(19) 99187-4342</p>
                </div>
                </div>
        </div>
        <div className="dFlex jcSpaceBetween footerCopy">
            <p className='gray1Color'>Copyright © DNC - 2025</p>
            <div className="langsArea dFlex">
                <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                    <img src={BrazilFlag} height="29px" />
                </Button>
                <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                    <img src={UsaFlag} height="29px" />
                </Button>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;