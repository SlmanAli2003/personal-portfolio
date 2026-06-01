import { Element } from 'react-scroll'
import './About.css'

const About = ({mode}) => {
    return (
        <Element name='aboutSection'>
            <div className={`about ${mode? 'about-dark-mode' : ''}`} >
                <div className="about-content">
                    <img src="/personal-portfolio/images/about-light.png" className='about-light' />
                    <img src="/personal-portfolio/images/about-dark.png" className='about-dark' />
                    <div className="about-me">
                        <h1 className='about-title'>About me</h1>
                        <p className='about-description'>I’m Slman, a Frontend Developer who transforms designs into clean and fast code. I use React.js and TailwindCSS to build responsive, interactive user interfaces that adapt smoothly to all devices. My goal is to improve user experience and website performance while ensuring clean, maintainable code.</p>
                        <div className="levels">
                            <h2 className='tool-name'>HTML5</h2>
                            <div className="LevelIndicator">
                                <div className="filled html-level"><div className="pointer"><div className="ratio"><p>85%</p></div></div></div>
                            </div>
                            <h2 className='tool-name'>CSS3</h2>
                            <div className="LevelIndicator">
                                <div className="filled css-level"><div className="pointer"><div className="ratio"><p>90%</p></div></div></div>
                            </div>
                            <h2 className='tool-name'>Javascript</h2>
                            <div className="LevelIndicator">
                                <div className="filled javaScript-level"><div className="pointer"><div className="ratio"><p>80%</p></div></div></div>
                            </div>
                            <h2 className='tool-name'>React</h2>
                            <div className="LevelIndicator">
                                <div className="filled react-level"><div className="pointer"><div className="ratio"><p>85%</p></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>

    )
}

export default About
