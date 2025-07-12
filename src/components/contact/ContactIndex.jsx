import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosConfig from "../../axiosConfig";

const ContactIndex = () => {
    const form = useRef();
    const [user, setUser] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        msg: "",
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser(values => ({...values,[name]:value}))
    }

    const sendEmail = async(e) => {
        e.preventDefault();
        await axiosConfig.post('/email/send',
        {
            name: user.user_name,
            email : user.user_email,
            subject : user.subject,
            message : user.msg
        })
        .then(function (response) {
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
            setUser({
                user_name: "",
                user_email: "",
                subject: "",
                msg: "",
            })
        })
        .catch(function (error) {
            toast.error(`Ops Message Not Sent !${error.response.data.messageError.map((val, i) => " "+val.msg)}`, 
            {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        });
    };

    return (
        <>
        <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <input type="text" name="user_name" placeholder="YOUR NAME" value={user.user_name || ''} required onChange={handleChange} />
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <input type="email" name="user_email" placeholder="YOUR EMAIL" value={user.user_email || ''} required onChange={handleChange} />
                    </div>
                </div>

                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <input type="text" name="subject" placeholder="YOUR SUBJECT" value={user.subject || ''} required onChange={handleChange} />
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-group">
                        <textarea name="msg" placeholder="YOUR MESSAGE" value={user.msg || ''} required onChange={handleChange}></textarea>
                    </div>
                </div>

                <div className="col-12 text-center text-lg-start mb-3">
                    <button type="submit" className="button">
                        <span className="button-text">Envoyer le message</span>
                        <span className="button-icon fa fa-send"></span>
                    </button>
                </div>
            </div>
        </form>
        </>
    );
};

export default ContactIndex;
