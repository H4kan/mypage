
import React, { Component } from 'react';

import SocialMedia from './SocialMedia';
import Footer from './Footer'
import '../../styles/Contact.css';

class Contact extends Component {
    state = {
        text: '',
        email: '',
        phone: '',
        submitted: false,
        firstSubmit: true,
    }
    animation = () => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 7 / 3 * window.innerHeight) {
                document.querySelector('div.form').classList.add('activeContact');
            }
        });
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    }
    handleMailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    handlePhoneChange = (e) => {
        // const inputValue = e.target.value;
        // if (inputValue * 1 > 0 && (inputValue * 1).toLocaleString() !== 'NaN')
        this.setState({
            phone: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            firstSubmit: false,
        })
        if (this.state.text.length > 4) {
            if (this.state.email.length > 4 && this.state.email.includes('@')) {
                return this.setState({
                    text: '',
                    email: '',
                    phone: '',
                    submitted: true,
                });


            }
            if (this.state.phone.length >= 9 && this.state.phone * 1 > 0 && (this.state.phone * 1).toLocaleString() !== 'NaN') {
                return this.setState({
                    text: '',
                    email: '',
                    phone: '',
                    submitted: true,
                });
            }
        }
        this.setState({
            submitted: false,
        })

    }
    render() {
        this.animation();
        return (
            <div id="contact">
                <div className="form">

                    <form action="submit">
                        <h3>Contact with me</h3>
                        {this.state.firstSubmit ? null :
                            (this.state.submitted ? <p>Form has been sent successfully</p> : <p style={{
                                color: 'red'
                            }}>Form cannot be sent</p>)}
                        <input
                            type="email"
                            className='mail'
                            placeholder='Your e-mail'
                            value={this.state.email}
                            onChange={this.handleMailChange}
                        />
                        <p>or</p>
                        <input
                            type="tel"
                            className="phone"
                            placeholder='Your phone number'
                            value={this.state.phone}
                            onChange={this.handlePhoneChange}
                        />
                        <textarea
                            name="text"
                            id="txt"
                            cols="30"
                            rows="10"
                            placeholder='Write something'
                            value={this.state.text}
                            onChange={this.handleTextChange}
                        ></textarea>
                        <button onClick={this.handleSubmit}>Send message</button>
                    </form>
                </div>
                <SocialMedia />
                <Footer />
            </div>
        );
    }
}

export default Contact;