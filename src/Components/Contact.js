import React from 'react';
import '../index.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
    return (<>
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <div className="subtitle">Contact Me</div>
                        <p><span><FaPaperPlane className="itag" /></span> onkarswami2002@gmail.com</p>
                        <p><span><FaPhoneSquareAlt className="itag" /></span> 8554835131 / 9284373167</p>
                        <div className="social-icons">
                            <a target="blank" href="https://github.com/omiswami99"><FaGithub /></a>
                            <a target="blank" href="https://www.linkedin.com/in/onkar-swami-45aa27232/"><FaLinkedin /></a>
                            <a target="blank" href="https://twitter.com/omiswami99"><FaTwitterSquare /></a>
                            <a target="blank" href="https://www.instagram.com/omiswami99/"><FaInstagram /></a>
                            <a target="blank" href="asd"><FaFacebook /></a>
                        </div>
                        <a href="../images/resume.pdf" download className='btn btn2'>Download Resume</a>
                    </div>
                    <div className="contact-right">
                        <form name='submit-to-google-sheet'>
                            <input type="text" name="Name" placeholder="Name" required />
                            <input type="email" name="Email" placeholder="Email" required />
                            <textarea name="Message" placeholder="Message" rows="6" required />
                            <button type="submit" className="btn btn2"> Submit</button>
                        </form>
                        <span id='msg'></span>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw6CwTAxzA2UWb0R2kmhPo0Meu1Y287ApQGO-HCNejj-YNNppr1w_yJ0T6gDobT6bnfRw/exec'
const form = document.forms['submit-to-google-sheet']

if (form) {

    form.addEventListener('submit', e => {

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))

        e.preventDefault()
    })
}

export default Contact;