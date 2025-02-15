import "./App.css";
import "../src/assets/css/meyawo.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Timeline from "./components/Timeline/Timeline";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
// import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <Home />
            {/* <Navbar /> */}
            <About />
            <Timeline />
            <Skills />
            <Projects />
            <ContactUs />
            <Footer />
        </>
    );
}

export default App;
