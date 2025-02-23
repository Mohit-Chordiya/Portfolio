import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Timeline.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
    faCode,
    faGraduationCap,
    faSchool,
    faUniversity,
    faStar,
} from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
    return (
        <>
            <section className="section" id="education">
                <div className="container text-center">
                    <p className="section-subtitle">What Is My Background ?</p>
                    <h6 className="section-title mb-6">Education</h6>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "#E6E6FA",
                            }}
                            date="2024 - present"
                            iconStyle={{
                                background: "#695aa6",
                                color: "#fff",
                            }}
                            icon={<FontAwesomeIcon icon={faCode} />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Java Full Stack Development
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Envision Computer Training Institute, Pune.
                            </h4>
                            <p>
                                Learned different skills like React JS,
                                JavaScript, HTML, CSS, Bootstrap, Java, Figma.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "#E6E6FA",
                            }}
                            date="2021 - 2023"
                            iconStyle={{
                                background: "#695aa6",
                                color: "#fff",
                            }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Bachelor of Engineering in Computer Engineering
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Savitribai Phule Pune University
                            </h4>
                            <p>
                                Learned different skills like managing and
                                hosting event and working as a team in different
                                sports.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "#E6E6FA",
                            }}
                            date="2017 - 2020"
                            iconStyle={{
                                background: "#695aa6",
                                color: "#fff",
                            }}
                            icon={<FontAwesomeIcon icon={faUniversity} />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Diploma in Computer Technology
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Maharashtra State Board of Technical Education
                            </h4>
                            <p>
                                Learned different skills like developing basic
                                apps in android and learned some basics of
                                database.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "#E6E6FA",
                            }}
                            date="2016 - 2017"
                            iconStyle={{
                                background: "#695aa6",
                                color: "#fff",
                            }}
                            icon={
                                <FontAwesomeIcon
                                    icon={faSchool}
                                    className="timeline-icon"
                                />
                            }
                        >
                            <h3 className="vertical-timeline-element-title">
                                SSC 10th
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Maharashtra State Board of Secondary and Higher
                                Secondary Education
                            </h4>
                            <p>
                                My best achivement in school was securing 99
                                marks in Maths.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            iconStyle={{
                                background: "rgb(16, 204, 82)",
                                color: "#fff",
                            }}
                            icon={<FontAwesomeIcon icon={faStar} />}
                        />
                    </VerticalTimeline>
                </div>
            </section>
        </>
    );
};

export default Timeline;
