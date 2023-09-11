import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactIndex = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
                "service_n4mkhz9",
                "template_ugoztxr",
                form.current,
                "user_vYmDSd9PwIuRXUQEDjYwN"
            ).then((result) => {
                    toast.success("Message Sent Successfully!", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                    document.getElementById("myForm").reset();
                },(error) => {
                    toast.error("Ops Message Not Sent! try again later", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                }
            );
    };

    return (
        <>
        <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <input type="text" name="name" placeholder="YOUR NAME" required />
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <input type="email" name="user_email" placeholder="YOUR EMAIL" required />
                    </div>
                </div>

                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <input type="text" name="subject" placeholder="YOUR SUBJECT" required />
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-group">
                        <textarea name="message" placeholder="YOUR MESSAGE" required></textarea>
                    </div>
                </div>

                <div className="col-12 text-center text-lg-start">
                    <button type="submit" className="button">
                        <span className="button-text">Send Message</span>
                        <span className="button-icon fa fa-send"></span>
                    </button>
                </div>
            </div>
        </form>
        </>
    );
};

export default ContactIndex;
