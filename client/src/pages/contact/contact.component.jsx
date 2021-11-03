import React from "react";
import Custombtn from "../../components/custom-btn/custom-btn.component";
import FormInput from "../../components/form-input/form-input.component";

import { useState } from "react";

import './contact.styles.scss'

const ContactForm = () => {

    const [contactMessages, setContactMessages] = useState({
        content: '',
        email: '',
        message: ''
    })

    const {content, email, message} = contactMessages

    const handleChange = (e) =>{
        const {value, name} = e.target
        setContactMessages({...contactMessages, [name]:value})
    }

    return(
    <div className="contact-item">
        <div className="contact-title">
            <h1>Contact Us</h1>
            <h5>We will get back to you within 24 hours!</h5>
        </div>
        <div className="form-control">
        <form 
        action="mailto:sunilswizy18@gamil.com"
        method="POST"
        enctype="multipart/form-data"
        autoComplete="off"
        >

            <FormInput
                label = "Email"
                type = "email"
                value = {email}
                onChange = {handleChange}
                name = "email"
                autoFocus
            />
             <FormInput
                label ="Content"
                type ="text"
                value ={content}
                onChange = {handleChange}
                name = "content"
            />
            <label className="message">Message</label>
             <textarea
                label = "Message"
                type = "text"
                value = {message}
                onChange = {handleChange}
                name = "message"
                rows= {7}
                cols = {77}
            />
            <div className="cust-btn">
                <Custombtn>Send message</Custombtn>
            </div>
        </form>
        </div>
    </div>
)
}

export default ContactForm