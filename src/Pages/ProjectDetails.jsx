import './ProjectDetails.css'
import { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar.jsx';
import { projects } from './../projects.js'
import { Link, useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProjectDetails = () => {
    const [mode, setMode] = useState(JSON.parse(localStorage.getItem("darkmode"))? true : false)
    function changeMode (mode) {
        localStorage.setItem("darkmode" , mode)
        setMode(JSON.parse(localStorage.getItem("darkmode")))
    }
    const params = useParams();
    const project_index = params.index;
    const project = projects[project_index]

    return (
        <div className={`project-details ${mode ? 'project-details-dark-mode' : ''}`}>
            <NavBar name='Slman' ArrayLinks={[]} changeMode={changeMode} mode={mode} />
            <Link to='/' className='bike-link'>
                <svg className='bike-arrow' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                </svg>
                <p className='bike'>Bike</p>
            </Link>
            <div className="details">
                <img className='project-img' src={project.image_src} alt="" />
                <div className="information">
                    <div className='header'>
                        <div className='title-and-date'>
                            <h1 className='title'>{project.title}</h1>
                            <p className='date'>{project.date}</p>
                        </div >
                        <a className='open-project' href={project.project_url} target='_blank'>
                            <img src="/personal-portfolio/icons/project-details-icon.png" alt="" />
                        </a>
                    </div>
                    <p className='project-description'>{project.description}</p>
                    <p className='Languages'>Basic Languages : <span>{project.languages}</span></p>
                    <p className='Framework'>Framework : <span>{project.frameWorke}</span></p>
                    <p className='Libraries'>Libraries : <span>{project.libraries}</span></p>
                    <a className='github-rebo' href={project.github_rebo} target='_blank'>Github Repo</a>
                </div>
            </div>

            <div className='slider'>
                <div className="title-and-btns">
                    <h1 className='title'>The Best <span>Projects</span></h1>
                    <div className="slider-btns">
                        <button className='custom-prev'> 
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                            </svg>
                        </button>
                        <button className='custom-next'> 
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="currentColor"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    direction="horizontal"
                    loop={true}
                    breakpoints={{
                        0 : {
                            slidesPerView : 1
                        } ,
                        640 : {
                            slidesPerView : 2
                        } ,
                        992 : {
                            slidesPerView : 3
                        }
                    }}
                >

                    {projects.map((project, index) => {
                        return (
                            <SwiperSlide key={index} className='slide'>
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
                                            <Link className='details-icon' to={`/project-details/${index}`}><img src="/personal-portfolio/icons/project-details-icon.png" alt="" onClick={() => window.scrollTo(0,0)}/></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>

        </div>
    )
}

export default ProjectDetails
