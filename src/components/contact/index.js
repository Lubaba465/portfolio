import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_urgnqss', 'template_9pe2o6x', form.current, 'QeTsOBoUTgzXk-bOQ')
            .then((result) => {
                toast.success("Ihre Nachricht wurde erfolgreich gesendet");
            }, (error) => {
                toast.error("Ihre Nachricht wurde nicht gesendet");

            });
    };

    return(
        <div className="movein">
            <div className="move">
            <div >

        <div className='container'>

            <div className="containerr">
            <div className="container_content">
                <div className="container_content_inner">

                    <div className="par">
                        <form ref={form} onSubmit={sendEmail} className="form">
                            <div className="name">
                            <input

                                type="text"
                                id="firstName"
                                name="name"
                                className="firstName"
                                placeholder="Vorname"

                                tabIndex="1"
                                required
                            />


                            <input
                                type="text"
                                id="lastName"
                                className="lastName"
                                placeholder="Nachname"

                                tabIndex="2"
                                required
                            />
                        </div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="email"
                                placeholder=" max.mustermann@example.com"
                                tabIndex="3"
                                required
                            />

                            <label htmlFor="message">Nachricht</label>
                            <textarea
                                placeholder="Start typing..."
                                className="message"
                                name="message"
                                required
                            >

                </textarea>
                              <button type="submit"  className="send download">Send</button>
                            <ToastContainer />

                        </form>
                    </div>

                </div></div>
            </div></div>



</div></div>

    <div className="overlay"></div>
</div>
    );
};
export default Contact;