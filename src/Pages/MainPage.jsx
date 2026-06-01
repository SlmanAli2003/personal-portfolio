import React, { useState } from 'react'
import NavBar from "./../Components/NavBar/NavBar"
import Home from "./../Components/Home/Home"
import About from "./../Components/About/About"
import Education from '../Components/Education/Education'
import Projects from '../Components/Projects/Projects'
import {projects} from './../projects'
import { scroller } from 'react-scroll'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'


const MainPage = () => {
    const [mode, setMode] = useState(JSON.parse(localStorage.getItem("darkmode"))? true : false)
    function changeMode (mode) {
        localStorage.setItem("darkmode" , mode)
        setMode(JSON.parse(localStorage.getItem("darkmode")))
    }

    const ArrayLinks = [
        {
            to: "homeSection",
            content: "Home"
        },
        {
            to: "aboutSection",
            content: "About me"
        },
        {
            to: "educationSection",
            content: "Education"
        },
        {
            to: "projectsSection",
            content: "Projects"
        },
        {
            to: "ContactSection",
            content: "Contact"
        }
    ]

    return (
        <div>
            <NavBar name="Slman" ArrayLinks={ArrayLinks} changeMode={changeMode} mode={mode} />
            <Home mode={mode}/>
            <About mode={mode}/>
            <Education mode={mode}/>
            <Projects mode={mode} projects={projects}/>
            <Contact mode={mode}/>
            <Footer mode={mode}/>
        </div>
    )
}

export default MainPage
