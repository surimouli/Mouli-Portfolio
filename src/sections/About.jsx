import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import { Lens } from "../components/Lens";
import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {
    const grid2Container = useRef();
    return (
        <section className = "c-space section-spacing">
            <h2 className = "text-heading" >About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */} 
                <div className="hidden md:flex items-end grid-default-color grid-1">
                    <div className="flex flex-col items-center justify-center gap-4 size-full"> 
                    <Lens> 
                        <img src="/Headshot.jpg" alt="Lens Demo" /> 
                    </Lens> 
                    </div> 
                </div>
                {/* Mobile / Phones */}
                <div className="flex md:hidden relative items-center justify-center grid-default-color grid-2 overflow-hidden min-h-[70vh] grid-1"> 
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <div className="relative z-10 backdrop-blur-md p-6 rounded-lg shadow-md max-w-[90%] sm:max-w-2xl text-center">
                        <Lens> 
                        <img src="/Headshot.jpg" alt="Lens Demo" /> 
                        </Lens>
                    </div>
                    </div> 
                </div>
                {/* Grid 2 */}
                <div className="relative grid-default-color grid-2 overflow-hidden">
                    {/* Background Image */}
                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] z-0"
                        alt="coding pov"
                    />

                    {/* Text Block - Centered without expanding parent */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
                        <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg shadow-md text-center max-w-[90%] sm:max-w-xl">
                        <p className="headtext text-white">
                            Hi, I'm Mouli Suri
                        </p>
                        <p className="subtext text-gray-200 mt-2">
                            A passionate programmer and aspiring software developer with a knack for problem-solving and a love for creating efficient, scalable solutions. Experienced in C++, Python, JavaScript, and web development technologies like React and Next.js. Eager to contribute my skills and enthusiasm to innovative projects in a collaborative environment.
                        </p>
                        </div>
                    </div>
                </div>
                {/* Grid 3 */}
                <div className = "grid-black-color grid-3">
                    
                </div>
                {/* Grid 4 */}
                <div className = "grid-black-color grid-4">
                    <div className = "z-10 w-[50%]">
                        <p className = "headtext">Contact Me</p>
                        <CopyEmailButton />
                    </div>
                    <figure className = "absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* Grid 5 */}
                <div className = "grid-default-color grid-5">
                    <div ref = {grid2Container} className = "flex items-center justify-center w-full h-full">
                        <p className = "flex items-end text-5xl text-gray-700">
                            CODE IS ART
                        </p>
                        <Card
                            style = {{ rotate: "75deg", top: "50%", left: "22%" }}
                            text = "C++"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "-25deg", top: "13%", left: "30%" }}
                            text = "Python"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "55deg", top: "58%", left: "32%" }}
                            text = "HTML"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "75deg", top: "39%", left: "-5%" }}
                            text = "JavaScript"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "-30deg", top: "65%", left: "5%" }}
                            text = "CSS"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "-45deg", top: "20%", left: "15%" }}
                            text = "Next.js"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "25deg", top: "15%", left: "1%" }}
                            text = "React"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "0deg", top: "77%", left: "19%" }}
                            text = "TailwindCSS"
                            containerRef = {grid2Container}
                        />
                    </div>
                </div>
            </div>        
        </section>
    )

}

export default About