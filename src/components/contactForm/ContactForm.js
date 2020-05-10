import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    
    onMessageChange = (event) => {
        this.setState({message: event.target.value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="contact-form">
                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                    <h2>Contact Form</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control form-message" rows="5"></textarea>
                    </div>
                    <button type="submit" className="projectCard">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;