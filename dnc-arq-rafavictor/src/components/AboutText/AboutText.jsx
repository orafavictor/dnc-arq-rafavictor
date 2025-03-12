import { useContext } from 'react'
import './AboutText.css'

// Context
import { AppContext } from '../../contexts/AppContext'

function AboutText() {
    const appContext = useContext(AppContext)
    return (
            <div className="container">
                <div className="textSection dFlex">
                    <div className="textSectionText">
                        <h2>{appContext.languages[appContext.language].about.title}</h2>
                    </div>
                    <div className="textSectionText">
                        <p className="primaryColor"> {appContext.languages[appContext.language].about.p1} </p>
                        <p> {appContext.languages[appContext.language].about.p2} </p>
                        <p> {appContext.languages[appContext.language].about.p3} </p>
                    </div>
                </div>            
            </div>
            
    )
}

export default AboutText