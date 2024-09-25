import { Fragment, useState } from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Brand from "./components/Brand";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Feedback from "./components/Feedback";
import Customer from "./components/Customer";
import Contact from "./components/Contact";
import Footer from "./components/Footer/index";

function App() {
    return (
        <div className="container px-10 mx-auto">
            <Header />
            <Welcome />
            <Brand />
            <Skill />
            <Project />
            <Resume />
            <Feedback />
            <Customer />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
