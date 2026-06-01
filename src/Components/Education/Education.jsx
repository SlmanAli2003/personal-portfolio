import { Element, Link } from 'react-scroll'
import './Education.css'

const Education = ({mode}) => {
    return (
        <Element name='educationSection'>
            <div className={`education ${mode? 'education-dark-mode' : ''}`}>
                <h1 className='education-title'>Education & Experience</h1>
                <div className="education-crrds_container">
                    <div className="education-card">
                        <h2 className='title-card'>Frontend Developer</h2>
                        <p className='description-card'>I learned Html , Css , React.js and TailwindCSS to build responsive, interactive user interfaces that adapt smoothly to all devices.</p>
                        <div className="circle"></div>
                    </div>
                    <div className="education-card">
                        <h2 className='title-card'>Software Engineer</h2>
                        <p className='description-card'>I study at the Faculty of Informatics Engineering / Department of Software Engineering, at Lattakia University, where I have the skill to find software solutions to problems and write maintainable and scalable code.</p>
                        <div className="circle"></div>
                    </div>
                </div>
                <Link className='bike' to='homeSection' smooth={true} duration={500} spy={true}>
                    <svg className='top-arrow' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M18.655 10.405a.75.75 0 0 1-1.06 0l-4.97-4.97v14.44a.75.75 0 0 1-1.5 0V5.435l-4.97 4.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06Z"></path></svg>
                </Link>
                <div className="moving-to-contact">
                    <div className="section1">
                        <h1 className='moving-title'>Try me out, risk free!</h1>
                        <p className='moving-description'>If you’re not happy with the design after the first draft, I’ll refund your deposit, <span>no questions asked</span> </p>
                    </div>
                    <Link to=''  className='move-btn' smooth={true} duration={500} spy={true}>
                        <p>Contact</p>
                        <svg className='right-arrow' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
                    </Link>
                </div>
            </div>
        </Element>
    )
}

export default Education
