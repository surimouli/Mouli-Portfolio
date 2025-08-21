import React from 'react';
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
    return (
        <div className = "container mx-auto mx-w-7xl">
            <Navbar />
            <Hero />
            <About />
        </div>
    );
};

export default App;