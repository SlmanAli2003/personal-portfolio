import { Link } from 'react-router-dom'
import './Projects.css'
import { Element } from 'react-scroll'

const projects = ({ mode, projects }) => {
    return (
        <Element name='projectsSection'>
            <div className={`projects ${mode ? 'projects-dark-mode' : ''}`}>
                <div className="title-and-btn">
                    <h1 className='projects-title'>My Creative Works Latest <span>Projects</span></h1>
                    <a className='btn' href='https://github.com/SlmanAli2003' target='_blank'>
                        <p>View Github </p>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="text-[18px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
                <div className="projects-container" >
                    {projects.map((project, index) => {
                        return (
                            <div className="project-card">
                                <img className='project-image' src={project.image_src} alt="" />
                                <div className="hover-lay">
                                    <div className="icons">
                                        <a href={project.image_src} target='_blank'>
                                            <img src="/personal-portfolio/icons/openImg.png" alt="" />
                                        </a>
                                        <a href={project.project_url} target='_blank'>
                                            <img src="/personal-portfolio/icons/open-project.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h2 className='project-title'>{project.title}</h2>
                                    <div className="languages-and-details-btn">
                                        <p className='languages-and-libraries'>{project.languages}{` , ${project.libraries}`}{` , ${project.frameWorke}`}</p>
                                        <Link className='details-icon' to={`/project-details/${index}`} onClick={() => window.scrollTo(0,0)}>
                                            <img src="/personal-portfolio/icons/project-details-icon.png" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Element>
    )
}

export default projects
