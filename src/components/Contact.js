import React, { useState } from 'react';
import { validateEmail } from '../utils/validateEmail';

const ContactForm = (props) => {
    const { setContactSelected } = props;

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [errorMessage, setErrorMessage] = useState('')

    const { name, email, message } = formState;

    const handleChange = (e) => {
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('')
            }
        }
        if(!errorMessage){
            setFormState({
                ...formState,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setContactSelected(false)
    }

    return (
        <section className='contact-container'>
            <div className='contact-header'>
                <div>
                    <h2>Contact Me here!</h2>
                </div>
                <button className='close-button' onClick={() => setContactSelected(false)}>X</button>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'></label>
                    <input type="text" defaultvalue={name} onBlur={handleChange} name="name" placeholder="name" />
                </div>
                <div>
                    <label htmlFor='email'></label>
                    <input type="email" defaultvalue={email} onBlur={handleChange} name="email" placeholder="email" />
                </div>
                <div>
                    <label htmlFor='message'></label>
                    <textarea name="message" defaultvalue={message} onBlur={handleChange} rows="5" placeholder="message" />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit' className='request-button'>Send</button>
                <a className='resume-button' target="_blank" >Resume</a> 
                
            </form>
            <p>contact link in footer</p>
        </section>
    )
}

export default ContactForm