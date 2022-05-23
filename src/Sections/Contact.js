import {ReactComponent as CircleCheck} from "../Resources/pictures/circle-check.svg"
import {ReactComponent as CircleCross} from "../Resources/pictures/circle-xmark.svg"
import {ReactComponent as Spinner} from "../Resources/pictures/spinner3.svg"
import { useState } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


const Contact = (props) => {

    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [subject, SetSubject] = useState("");
    const [message, SetMessage] = useState("");
    const [errors, SetErrors] = useState({
        name:false,
        email: false,
        message:false
    })
    const [emailStatus, SetEmailStatus] = useState("");
    

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(emailStatus === "sent") return;
        
        let emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        document.querySelector(".name-error").classList.add("hidden");
        document.querySelector(".email-error").classList.add("hidden");
        document.querySelector(".message-error").classList.add("hidden");

        let currentErrors = {name:false, email:false,message:false};
        
        // Collect and display form errors
        if(!name) {
            currentErrors.name = true;
            document.querySelector(".name-error").classList.remove("hidden");
        } 
            
        if(!email || !emailPattern.test(email) ) {
            currentErrors.email = true;
            document.querySelector(".email-error").classList.remove("hidden");
        } 
        if(!message) {
            currentErrors.message = true;
            document.querySelector(".message-error").classList.remove("hidden");
        }

        // Set Errors and Focus
        if(currentErrors.name){
            SetErrors(currentErrors);
            document.querySelector(".name-input").focus();
            return;
        }
        if(currentErrors.email){
            SetErrors(currentErrors);
            document.querySelector(".email-input").focus();
            return;
        }
        if(currentErrors.message){
            SetErrors(currentErrors);
            document.querySelector(".message-area").focus();
            return;
        }

        SetEmailStatus("loading");
        sendEmail(name, email, subject, message);
        return;
    }

    const sendEmail = (name, email, subject, message) => {

        //TESTING UI WITHOUT SENDING EMAILS ---------
        //return console.log('UI TEST ONLY : sending email')
        
        // -----------------------------------------

        if(!subject) subject = "New Message from " + name;

        message = message.split('\n').join('<br/>');

        let data = {
            service_id: "service_xeqn3me",
            template_id: "template_wl1yd41",
            user_id: "14Q0ZCu8NExFlyftx",
            template_params: {
                "name": name,
                "email": email,
                "subject": subject,
                "message": message
            }
        }

        axios.post(
            "https://api.emailjs.com/api/v1.0/email/send",
            data,
            {headers: {
                "content-type": "application/json"
            }}
        ).then(res => {
            //console.log(res);
            document.querySelector(".display-container").classList.remove("hidden");
            if(res.status === 200){
                resetForm();
                return SetEmailStatus("sent");
            } 
            return SetEmailStatus("error");
        }).catch(err => {
            document.querySelector(".display-container").classList.remove("hidden");
            document.querySelector(".display-container").classList.add("red");

            //console.log(err)
            return SetEmailStatus("error");
        })
        
    }

    const resetForm = () => {
        SetName("");
        SetEmail("");
        SetSubject("");
        SetMessage("");
    }

    const buttonDisplay = () => {
        switch (emailStatus) {
            case "sent" : 
                return (<div className="confirmation-logo">
                            <CircleCheck/>
                        </div>
                        );
            case "loading":
                return (<div className="loading-logo">
                            <Spinner/>
                        </div>
                        );
            case "error":
                return (<div className="error-logo">
                            <CircleCross/>
                        </div>
                        );
            default:
                return (
                <button onClick={e => {onSubmit(e)}}>{props.display.content.contact.send}</button>
                );
        }
    }

    return(
        <section className="contact" id='contact'>
            <h2>{props.display.content.contact.title}</h2>
            <div className="form-container">
                <form className="contact-form" action="">
                    <label>{props.display.content.contact.labels.name}</label>
                    <input  type="text"
                            className="name-input input" 
                            placeholder={props.display.content.contact.name}
                            value={name}
                            onChange={e => SetName(e.target.value)} 
                            onFocus={e => e.target.placeholder=""}
                            onBlur={e => e.target.placeholder=props.display.content.contact.name}
                            required/>
                    <div className="name-error error-container hidden">
                        <p>{props.display.content.contact.validation.nameError}</p>
                    </div>
                    <label>{props.display.content.contact.labels.email}</label>
                    <input  type="email" 
                            className="email-input input"
                            placeholder={props.display.content.contact.email}
                            value={email}
                            onChange={e => SetEmail(e.target.value)}
                            onFocus={e => e.target.placeholder=""}
                            onBlur={e => e.target.placeholder=props.display.content.contact.email}
                            required/>
                    <div className="email-error error-container hidden">
                        <p>{props.display.content.contact.validation.emailError}</p>
                    </div>
                    <label>{props.display.content.contact.labels.messageBox}</label>
                    <div className="message-container">
                        <input  type="text" 
                                className="subject-input input"
                                placeholder={props.display.content.contact.subject}
                                value={subject}
                                onChange={e => SetSubject(e.target.value)}
                                onFocus={e => e.target.placeholder=""}
                                onBlur={e => e.target.placeholder=props.display.content.contact.subject}/>
                        <textarea   className="message-area input"
                            placeholder={props.display.content.contact.message}
                            value={message} 
                            onChange={e => SetMessage(e.target.value)}
                            onFocus={e => e.target.placeholder=""}
                            onBlur={e => e.target.placeholder=props.display.content.contact.message}
                            required/>
                    </div>
                    <div className="message-error error-container hidden">
                        <p>{props.display.content.contact.validation.messageError}</p>
                    </div>
                    <div className="display-container hidden">
                        <p>{emailStatus === "error"  
                            ? props.display.content.contact.validation.emailNotSent
                            : props.display.content.contact.validation.emailSent}</p>
                    </div>
                    {buttonDisplay()}
                </form>
            </div>
        </section>
    )
}

const mapStateToProps = (store) => {
    return {
        display: store.display
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);