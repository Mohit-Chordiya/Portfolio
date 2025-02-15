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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Repudiandae aliquid ad provident aut fuga
                            animi soluta quae eos non cupiditate voluptates
                            dolorem, doloremque quos dicta quibusdam impedit
                            iure nemo a iste culpa! Quasi quibusdam hic
                            recusandae delectus velit officiis explicabo
                            voluptatibus! Nemo esse similique, voluptates labore
                            distinctio, placeat explicabo facilis molestias,
                            blanditiis culpa iusto voluptatem ratione eligendi
                            a, quia temporibus velit vero ipsa sint ex
                            voluptatum expedita aliquid! Debitis, nam!
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
