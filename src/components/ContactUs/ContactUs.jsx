// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// const ContactUs = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         const serviceID = "service_gosl0sk";
//         const templateID = "template_c3i4m1m";
//         const publicKey = "CHmFnuWNqCQnJ-GoT";

//         const templateParams = {
//             from_name: name,
//             from_email: email,
//             to_name: "Mohit Chordiya",
//             message: message,
//         };

//         emailjs
//             .send(serviceID, templateID, templateParams, publicKey)
//             .then((response) => {
//                 console.log("Email sent successfully", response);
//                 setName("");
//                 setEmail("");
//                 setMessage("");
//             })
//             .catch((error) => {
//                 console.error("Error sending email", error);
//             });
//     };
//     return (
//         <>
//             <section className="section" id="contact">
//                 <div className="container text-center">
//                     <p className="section-subtitle">How can you communicate?</p>
//                     <h6 className="section-title mb-5">Contact Me</h6>
//                     <form
//                         action
//                         className="contact-form col-md-10 col-lg-8 m-auto"
//                     >
//                         <div className="form-row">
//                             <div className="form-group col-sm-6">
//                                 <input
//                                     type="text"
//                                     size="50"
//                                     className="form-control"
//                                     placeholder="Your Name"
//                                     value={name}
//                                     style={{ border: "none" }}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group col-sm-6">
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     placeholder="Enter Email"
//                                     value={email}
//                                     style={{ border: "none" }}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group col-sm-12">
//                                 <textarea
//                                     name="comment"
//                                     id="comment"
//                                     rows="6"
//                                     className="form-control"
//                                     placeholder="Write Something"
//                                     value={message}
//                                     onFocus={{ border: "1px solid #695AAB" }}
//                                     style={{ border: "none" }}
//                                     onChange={(e) => setMessage(e.target.value)}
//                                     required
//                                 ></textarea>
//                             </div>
//                             <div className="form-group col-sm-12 mt-3">
//                                 <input
//                                     type="submit"
//                                     value="Send Message"
//                                     className="btn btn-outline-primary rounded"
//                                     style={{ width: "100%", height: "35px" }}
//                                     onClick={handleFormSubmit}
//                                 />
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default ContactUs;

import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!name.trim()) {
            errors.name = "Name is required";
            isValid = false;
        }

        if (!email.trim()) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "Invalid email format";
            isValid = false;
        }

        if (!message.trim()) {
            errors.message = "Message cannot be empty";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const serviceID = "service_gosl0sk";
        const templateID = "template_c3i4m1m";
        const publicKey = "CHmFnuWNqCQnJ-GoT";

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Mohit Chordiya",
            message: message,
        };

        emailjs
            .send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully", response);
                setName("");
                setEmail("");
                setMessage("");
                setErrors({});
            })
            .catch((error) => {
                console.error("Error sending email", error);
            });
    };

    return (
        <section className="section" id="contact">
            <div className="container text-center">
                <p className="section-subtitle">How can you communicate?</p>
                <h6 className="section-title mb-5">Contact Me</h6>
                <form
                    className="contact-form col-md-10 col-lg-8 m-auto"
                    onSubmit={handleFormSubmit}
                >
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                                value={name}
                                style={{ border: "none" }}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && (
                                <p className="text-danger">{errors.name}</p>
                            )}
                        </div>
                        <div className="form-group col-sm-6">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={email}
                                style={{ border: "none" }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <p className="text-danger">{errors.email}</p>
                            )}
                        </div>
                        <div className="form-group col-sm-12">
                            <textarea
                                rows="6"
                                className="form-control"
                                placeholder="Write Something"
                                value={message}
                                style={{ border: "none" }}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            {errors.message && (
                                <p className="text-danger">{errors.message}</p>
                            )}
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-outline-primary rounded"
                                style={{ width: "100%", height: "35px" }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
