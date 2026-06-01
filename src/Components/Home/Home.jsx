import { Element } from 'react-scroll'
import './Home.css'

const Home = ({ mode }) => {
    return (
        <Element name='homeSection'>
            <div className={` home ${mode ? "home-dark-mode" : ""}`}>
                <div className="home-text">
                    <p className='welcome'>welcome</p>
                    <h1 className='home-title'>I’m Slman</h1>
                    <h1 className='home-title'>Frontend Developer</h1>
                    <p className='home-description'>Agency-quality Webflow websites with the personal touch of a freelancer.</p>
                    <a href="" className='cv' >Download Cv</a>
                </div>
                <img src="/personal-portfolio/images/personal-image.png" className='personal-image' />
            </div>
        </Element>
    )
}

export default Home
