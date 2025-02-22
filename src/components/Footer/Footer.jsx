import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="container">
                <footer className="footer">
                    <p className="mb-0">
                        &copy; {currentYear} Mohit Chordiya. All Rights Reserved
                    </p>
                    <div className="social-links text-right m-auto ml-sm-auto">
                        <a
                            href="https://www.linkedin.com/in/mohit-chordiya-783a16185"
                            className="link text-decoration-none"
                            target="_blank"
                        >
                            <FaLinkedinIn className="social-icons" />
                        </a>
                        <a
                            href="https://github.com/Mohit-Chordiya"
                            className="link text-decoration-none"
                            target="_blank"
                        >
                            <FaGithub className="social-icons" />
                        </a>
                        <a
                            href="mailto: mohitmchordiya33@gmail.com"
                            className="link text-decoration-none"
                            target="_blank"
                        >
                            <MdEmail className="social-icons" />
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
