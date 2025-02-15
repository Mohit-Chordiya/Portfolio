import { useEffect, useState } from "react";

const Navbar = () => {
    const [isAffixed, setIsAffixed] = useState(false);
    const [offsetTop, setOffsetTop] = useState(900);

    const handleResize = () => {
        if (window.innerWidth < 769) {
            setOffsetTop(800);
        } else {
            setOffsetTop(900);
        }
    };

    useEffect(() => {
        handleResize();

        const handleScroll = () => {
            const navbar = document.querySelector(".custom-navbar");
            if (navbar) {
                if (window.scrollY > offsetTop) {
                    setIsAffixed(true);
                } else {
                    setIsAffixed(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [offsetTop]);

    const toggleNavbar = () => {
        const navToggle = document.getElementById("nav-toggle");
        const navList = document.querySelector("ul.nav");

        if (navToggle && navList) {
            navToggle.classList.toggle("is-active");
            navList.classList.toggle("show");
        } else {
            console.error("Navbar elements not found.");
        }
    };

    return (
        <nav
            className={`custom-navbar ${isAffixed ? "affix" : ""}`}
            data-spy="affix"
            data-offset-top={offsetTop}
        >
            <div className="container">
                <a className="logo" href="#">
                    &#123; M &#125;
                </a>
                <ul className="nav">
                    <li className="item">
                        <a className="link" href="#home">
                            Home
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="#timeline">
                            Education
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="#project">
                            Projects
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
                <button
                    id="nav-toggle"
                    className="hamburger hamburger--elastic"
                    onClick={toggleNavbar}
                >
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
