import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './Header.css';
import Logo from '../../assets/dnc-logo.svg';

// Components
import Button from '../Button/Button';

// Context
import { AppContext } from '../../contexts/AppContext'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => { setIsOpen(!isOpen)
    }
    const appContext = useContext(AppContext)
    return (
      <header>
        <div className="container">
          <div className="alCenter dFlex jcSpaceBetween">
              <Link to="/"><img src={Logo} alt="" /></Link>
              <div className="mobileMenu">
                  <Button buttonStyle="secondary" onClick={toggleMenu}>
                      Menu
                  </Button>
              </div>
              <nav className={`nav ${isOpen ? 'open' : ''}`}>
              <Button buttonStyle="unstyled" className="mobileMenu closeBtn" onClick={toggleMenu}>
                  X
              </Button>
              <ul className='dFlex'>
                  <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                  <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                  <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                  <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
              </ul> 
          </nav>
          </div>
        </div>
      </header>
    );
}

export default Header;