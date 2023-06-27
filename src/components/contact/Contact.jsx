import "./contact.css"
import Phone from "../../images/phone_icon.png"
import Email from "../../images/email-icon.png"
import Address from "../../images/location-dot.svg"
import { useContext, useRef, useState } from "react"
import emailjs from "emailjs-com"
import { ThemeContext } from "../../context"

const Contact = () => {
    const formRef = useRef();
    const[done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            "service_05a373d",
            "template_e0hhsxi",
            formRef.current,
            "user_DrriDPTGKO2Zj4RDXCA6W"
        )
        .then(
            (result) => {
                console.log(result.text);
                setDone(true)
            },
            (error) => {
                console.log(error.text);
            }
        );
    }
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Your project is a discussion away.</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} 
                        alt="" 
                        className="c-icon" 
                        />
                        +234 703139 0569
                    </div>
                </div>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Email} 
                        alt="" 
                        className="c-icon" 
                        />
                        info@jenrade.com
                    </div>
                </div>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Address} 
                        alt="" 
                        className="c-icon" 
                        />
                        GOSGRA Estate, Orimerunmu, off Lagos-Ibadan Expressway, Mowe.
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What do yo have in mind?</b> Please get in touch. I love challenges because they are opportuinities for growth and development.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                    <textarea style={{backgroundColor: darkMode && "#333"}} name="message" rows="5" placeholder="Message" />
                    <button>Submit</button>
                    {done && "Thank you for the message..."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
