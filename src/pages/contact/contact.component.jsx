import React from "react";
import Custombtn from "../../components/custom-btn/custom-btn.component";
import FormInput from "../../components/form-input/form-input.component";

import './contact.styles.scss'

class ContactForm extends React.Component{

    constructor(){
        super()
        this.state = {
            content: '',
            email: '',
            message: ''
        }
    }

    handleChange = (e) =>{
        const {value, name} = e.target
        this.setState({[name]:value})
    }

    render(){
        const {content, email, message} = this.state
    return(
    <div className="contact-item">
        <div className="contact-title">
            <h1>Contact Us</h1>
            <h5>We will get back to you within 24 hours!</h5>
        </div>
        <div className="form-control">
        <form 
        action="mailto:contact@yourdomain.com"
        method="POST"
        enctype="multipart/form-data">

            <FormInput
                label = "Email"
                type = "email"
                value = {email}
                onChange = {this.handleChange}
                name = "email"
                autoFocus
            />
             <FormInput
                label ="Content"
                type ="text"
                value ={content}
                onChange = {this.handleChange}
                name = "content"
            />
            <label className="message">Message</label>
             <textarea
                label = "Message"
                type = "text"
                value = {message}
                onChange = {this.handleChange}
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
}

export default ContactForm