import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

function Contacts () {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_b8kruJxge75hdpNGD0QvK";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Thank you for sending me an email. I will contact you as soon as possible :D");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Feel Free to contact me!</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/*Name INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    {
                                        ...register("name", {
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 20,
                                            message: "Please enter a name with fewer than 20 characters"
                                        }
                                    })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/*Phone INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    name="phone"
                                    {...register("phone", {
                                        required: "Please enter your phone number",

                                    })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            {/*Email INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    {...register("email", {
                                        required: "Please enter your email address",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid! Please check your email"
                                        }

                                    })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/*Subject INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    {
                                        ...register("subject", {
                                        required: "OH!, you forgot the subject :D"
                                    })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                        
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea
                                    //id="description"
                                    className="form-control"
                                    placeholder="Anything you would like to tell me :D"
                                    name="description"
                                ></textarea>
                                <div className="line"></div>
                                <button className="btn-main-offer contacts-btn" type="submit">CONTACT ME</button>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;

