import { Element } from 'react-scroll'
import './Contact.css'

const Contact = ({mode}) => {

    return (
        <Element name='ContactSection'>
            <div className={`contact ${mode? 'contact-dark-mode' : ''}`}>
                <h1 className='contact-title'>Let’s Discuss Your <span>Project</span></h1>
                <div className="SendEmail">
                    <div className="contactInfo">
                        <div className="call">
                            <div className="img"><img src="/personal-portfolio/icons/call-icon.png" alt="" /></div>
                            <div className="info">
                                <p className='title'>Call me</p>
                                <p className='value'>0998432275</p>
                            </div>
                        </div>
                        <div className="email">
                            <div className="img"><img src="/personal-portfolio/icons/msg-icon.png" alt="" /></div>
                            <div className="info">
                                <p className='title'>Email me</p>
                                <p className='value'>eng.slman.ali@gmail.com</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="img"><img src="/personal-portfolio/icons/address-icon.png" alt="" /></div>
                            <div className="info">
                                <p className='title'>Address</p>
                                <p className='value'>Latakia,Syria</p>
                            </div>
                        </div>
                    </div>
                    <form className='form'>
                        <input type="text" placeholder='Full name' className='inputName'/>
                        <input type="email" placeholder='Your email' className='inputEmail'/>
                        <input type="text" placeholder='Phone number' className='inputNumber'/>
                        <textarea placeholder='Message'className='inputMsg'></textarea>
                        <input type="submit" value="Send Message" className='send' />
                    </form>
                </div>
                
            </div>
        </Element>
    )
}

export default Contact
