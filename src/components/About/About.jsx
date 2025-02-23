// import React from "react";
import photo from "../../assets/imgs/photo.png";
import resume from "../../assets/resume/Mohit Chordiya.pdf";
import Navbar from "../Navbar/Navbar";

const About = () => {
    // Handle Resume Download
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Mohit Chordiya.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="section" id="about">
            <Navbar />
            <div className="container text-center">
                <div className="about">
                    <div className="about-img-holder">
                        <img
                            src={photo}
                            className="about-img"
                            alt="Image not found"
                        />
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p>
                            Hi, my name is Mohit Chordiya. I have completed
                            Bachelor’s of Engineering in Computer Engineering
                            from Pune University. During my engineering I have
                            gained significant knowledge related to software
                            development. Which increased my curiosity to get
                            more knowledge so right now I am pursuing Java Full
                            Stack Development certification course. Through this
                            course I have created website design from scratch
                            and make it responsive and attractive. I have worked
                            on several projects that help me sharpen my
                            technical skills and learn new technologies.
                            Additionally, I have completed an internship in
                            which I gained hands on experience with Git and
                            GitHub. Beyond academics I have attended some
                            workshops in IIT Bombay related to Metallurgy on
                            Lasers and its applications and also Transmission
                            Electron Microscopy. This depicts that I have
                            curiosity to learn new things and adapt to new
                            technology comfortably.
                        </p>
                        <button
                            className="btn-rounded btn btn-outline-primary mt-4"
                            onClick={handleDownload}
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
