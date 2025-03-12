import { useContext,useState, useEffect } from 'react'
import './ProjectsList.css'

// Assets
import LikeFilled from '../../assets/likeFilled.svg'
import LikeOutline from '../../assets/like.svg'

// Components
import Button from '../Button/Button'

//Utils
import { getApiData } from '../../services/apiServices'

// Context
import { AppContext } from '../../contexts/AppContext'


function ProjectsList() {
    const [projects, setProjects] = useState()
    const [favProjects, setfavProject] = useState([])
    const appContext = useContext(AppContext)
    const handleSavedProjects = (id) => {
        setfavProject((prevFavProjects) => {
            if (prevFavProjects.includes(id)) {
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects) {
            setfavProject(savedFavProjects)
        }
    }, []) 
    

  return (
    <div className="projectsSection" >
        <div className="projectsHero">
            <h2>{appContext.languages[appContext.language].projects.title}</h2>
            <p>{appContext.languages[appContext.language].projects.subtitle}</p>
        </div>
        <div className="projectsGrid">
            {
                 projects && projects.map((project) => (
                    <div className="projectCard dFlex jcCenter alCenter fdColumn" key={project.id}>
                        <div 
                            className="thumb tertiaryBackground"
                            style={{ backgroundImage: `url(${project.thumb})`}}
                        ></div>
                        <h3>{project.title}</h3>
                        <p>{project.subtitle}</p>
                        <Button buttonStyle='unstyled' onClick={() => handleSavedProjects(project.id)}>
                            <img src={favProjects.includes(project.id) ? LikeFilled : LikeOutline} height="20px"/>
                        </Button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProjectsList