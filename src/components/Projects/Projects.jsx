import CakeShop from "../../assets/imgs/cake_shop.png";
import Cafeteria from "../../assets/imgs/cafeteria.png";
import TravelAndTourism from "../../assets/imgs/travel_and_tourism.png";
import Prisma from "../../assets/imgs/prisma.png";
import Luxrio from "../../assets/imgs/luxrio.png";
import Brailie from "../../assets/imgs/brailie.png";
import VidTube from "../../assets/imgs/vidtube.png";
import Prowess from "../../assets/imgs/prowess.png";

const Projects = () => {
    return (
        <section className="section" id="project">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Projects</h6>
                <div className="row">
                    <div className="col-md-4">
                        <a
                            href="https://cake-shop-by-mohit.netlify.app/"
                            className="portfolio-card"
                            target="_blank"
                        >
                            <img
                                src={CakeShop}
                                className="portfolio-card-img img-responsive rounded img-fluid"
                                alt="Image not found"
                            />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4 className="project-title">Cake Shop</h4>
                                    <p className="font-weight-normal project-subtitle">
                                        HTML, CSS
                                    </p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a
                            href="https://robusta-corretto-by-mohit.netlify.app/"
                            className="portfolio-card"
                            target="_blank"
                        >
                            <img
                                className="portfolio-card-img img-responsive rounded"
                                src={Cafeteria}
                                alt="Image not found"
                            />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4 className="project-title">
                                        Coffee House
                                    </h4>
                                    <p className="font-weight-normal project-subtitle">
                                        HTML, CSS
                                    </p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a
                            href="https://travel-and-tourism-by-mohit.netlify.app/"
                            className="portfolio-card"
                            target="_blank"
                        >
                            <img
                                className="portfolio-card-img img-responsive rounded"
                                src={TravelAndTourism}
                                alt="Image not found"
                            />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4 className="project-title">
                                        Travel & Tourism
                                    </h4>
                                    <p className="font-weight-normal project-subtitle">
                                        HTML, CSS, Bootstrap
                                    </p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a
                            href="https://prisma-by-mohit.netlify.app/"
                            className="portfolio-card"
                            target="_blank"
                        >
                            <img
                                className="portfolio-card-img img-responsive rounded"
                                src={Prisma}
                                alt="Image not found"
                            />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4 className="project-title">Prisma</h4>
                                    <p className="font-weight-normal project-subtitle">
                                        HTML, CSS, Bootstrap
                                    </p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a
                            href="https://luxrio-by-mohit.netlify.app/"
                            className="portfolio-card"
                            target="_blank"
                        >
                            <img
                                className="portfolio-card-img img-responsive rounded"
                                src={Luxrio}
                                alt="Image not found"
                            />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4 className="project-title">Luxrio</h4>
                                    <p className="font-weight-normal project-subtitle">
                                        HTML, CSS, Bootstrap, JavaScript,
                                        Multi-Page
                                    </p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a
                            href="https://brailie-by-mohit.netlify.app/"
                            className="portfolio-card"
                            target="_blank"
                        >
                            <img
                                className="portfolio-card-img img-responsive rounded"
                                src={Brailie}
                                alt="Image not found"
                            />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4 className="project-title">Brailie</h4>
                                    <p className="font-weight-normal project-subtitle">
                                        HTML, CSS, Bootstrap, JavaScript,
                                        ReactJS
                                    </p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a
                            href="https://vidtube-by-mohit.netlify.app/"
                            className="portfolio-card"
                            target="_blank"
                        >
                            <img
                                className="portfolio-card-img img-responsive rounded"
                                src={VidTube}
                                alt="Image not found"
                            />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4 className="project-title">VidTube</h4>
                                    <p className="font-weight-normal project-subtitle">
                                        HTML, CSS, Bootstrap, JavaScript,
                                        ReactJS,
                                        <br /> API Fetching
                                    </p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a
                            href="https://prowess-by-mohit.netlify.app/"
                            className="portfolio-card"
                            target="_blank"
                        >
                            <img
                                className="portfolio-card-img img-responsive rounded"
                                src={Prowess}
                                alt="Image not found"
                            />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4 className="project-title">Prowess</h4>
                                    <p className="font-weight-normal project-subtitle">
                                        HTML, CSS, Bootstrap, JavaScript,
                                        ReactJS,
                                        <br /> Multi-Page
                                    </p>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
