import React from 'react';
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";

const App = () => {
    return (
        <div className = "container mx-auto mx-w-7xl">
            <Navbar />
            <Hero />
            <About />
            <Experiences />
            <Footer />
        </div>
    );
};

export default App;