import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

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
                            href="javascript:void(0)"
                            className="link text-decoration-none"
                        >
                            <FaLinkedinIn className="social-icons" />
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="link text-decoration-none"
                        >
                            <FaGithub className="social-icons" />
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="link text-decoration-none"
                        >
                            <IoCall className="social-icons" />
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
