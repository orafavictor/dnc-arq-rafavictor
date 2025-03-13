import { useContext } from 'react';
import { Link } from 'react-router-dom'
import './Hero.css'
import Button from '../Button/Button'

// Context
import { AppContext } from '../../contexts/AppContext'

function Hero() {
  const appContext = useContext(AppContext)
  return (
    <div className="hero dFlex alCenter">
        <div className="heroText">
                <h1>{appContext.languages[appContext.language].hero.title}</h1>
                <p>{appContext.languages[appContext.language].hero.subtitle}</p>
                <Link to="/about">
                    <Button buttonStyle="secondary" arrow>
                    {appContext.languages[appContext.language].hero.cta}
                    </Button>
                </Link>
        </div>
    </div>
  )
}

export default Hero