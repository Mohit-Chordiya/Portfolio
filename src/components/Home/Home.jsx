import { useEffect, useState, useRef, useMemo } from "react";

const Home = () => {
    const [typedText, setTypedText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    const textArray = useMemo(
        () => [
            "UI/UX DEVELOPER",
            "FRONTEND DEVELOPER",
            "BACKEND DEVELOPER",
            "FULL STACK DEVELOPER",
        ],
        []
    );

    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;

    const textArrayIndex = useRef(0);
    const charIndex = useRef(0);
    const typing = useRef(true);

    useEffect(() => {
        let timeout;

        const tick = () => {
            const currentText = textArray[textArrayIndex.current];

            if (typing.current) {
                if (charIndex.current < currentText.length) {
                    setTypedText(
                        currentText.substring(0, charIndex.current + 1)
                    );
                    charIndex.current++;
                    timeout = setTimeout(tick, typingDelay);
                } else {
                    typing.current = false; // Switch to erasing
                    timeout = setTimeout(tick, newTextDelay);
                }
            } else {
                if (charIndex.current > 0) {
                    setTypedText(
                        currentText.substring(0, charIndex.current - 1)
                    );
                    charIndex.current--;
                    timeout = setTimeout(tick, erasingDelay);
                } else {
                    typing.current = true; // Switch to typing
                    textArrayIndex.current =
                        (textArrayIndex.current + 1) % textArray.length; // Cycle through words
                    timeout = setTimeout(tick, typingDelay + 500); // Small delay before next word
                }
            }

            setCursorVisible(true); // Ensure cursor is always visible during typing/erasing.
        };

        // Initial timeout to start the typing effect
        timeout = setTimeout(tick, newTextDelay + 250);

        return () => clearTimeout(timeout); // Clear timeout on unmount
    }, [textArray]);

    return (
        <>
            <header id="home" className="header" role="banner">
                <div className="overlay"></div>
                <div className="header-content container">
                    <h1 className="header-title">
                        <span className="up">HI!</span>
                        <span className="down">I am Mohit Chordiya</span>
                    </h1>
                    <p className="header-subtitle">
                        <span className="typed-text">{typedText}</span>
                        <span
                            className={`cursor ${
                                cursorVisible ? "typing" : ""
                            }`}
                        >
                            &nbsp; {/* Keep the non-breaking space */}
                        </span>
                    </p>
                    <a href="#about" className="btn btn-primary" role="button">
                        About Me
                    </a>
                </div>
            </header>
        </>
    );
};

export default Home;
