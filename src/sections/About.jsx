import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";

const About = () => {
    const grid2Container = useRef();
    return (
        <section className = "c-space section-spacing">
            <h2 className = "text-heading" >About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />
                    <div className = "z-10">
                        <p className = "headtext" > 
                            Hi, I'm Mouli Suri
                        </p>
                        <p className = "subtext">
                            A passionate programmer and aspiring software developer with a knack for problem-solving and a love for creating efficient, scalable solutions. Experienced in C++, Python, JavaScript, and web development technologies like React and Next.js. Eager to contribute my skills and enthusiasm to innovative projects in a collaborative environment.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
                </div>
                {/* Grid 2 */}
                <div className = "grid-default-color grid-2">
                    <div ref = {grid2Container} className = "flex items-center justify-center w-full h-full">
                        <p className = "flex items-end text-5xl text-grey-500">
                            CODE IS ART
                        </p>
                        <Card 
                            style = {{ rotate: "75deg", top: "25%", left: "23%" }}
                            text = "C++"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "-25deg", top: "10%", left: "50%" }}
                            text = "Python"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "55deg", top: "58%", left: "40%" }}
                            text = "HTML"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "75deg", top: "30%", left: "72%" }}
                            text = "JavaScript"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "-30deg", top: "65%", left: "5%" }}
                            text = "CSS"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "-45deg", top: "60%", left: "60%" }}
                            text = "Next.js"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "45deg", top: "18%", left: "1%" }}
                            text = "React"
                            containerRef = {grid2Container}
                        />
                        <Card 
                            style = {{ rotate: "20deg", top: "70%", left: "28%" }}
                            text = "TailwindCSS"
                            containerRef = {grid2Container}
                        />
                    </div>
                </div>
                {/* Grid 3 */}
                <div className = "grid-black-color grid-3">
                    <div className = "z-10 w-[50%]">
                        <p className = "headtext">Mouli</p>
                        <p className = "subtext" >
                            yayy! you found me :)
                        </p>
                    </div>
                    <figure className = "absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className = "grid-special-color grid-4"></div>
                {/* Grid 5 */}
                <div className = "grid-default-color grid-5"></div>
            </div>        
        </section>
    )

}

export default About