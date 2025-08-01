import React from "react";
import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1 className="">
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span
                                                key={word.text}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="inline-block xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 "
                                                />
                                                <span className="text">
                                                    {word.text}
                                                </span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>

                            <h1 className="">into Real Project</h1>
                            <h1 className="">that Deliver Results</h1>
                            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                                Hi, I'm Rezwoan, a developer based in Bangladesh
                                with a passion for CODE
                            </p>
                            <Button
                                className="md:w-80 md:h-16 w-60 h-12"
                                id="button"
                                text="See my Work"
                            />
                        </div>
                    </div>
                </header>
            </div>
        </section>
    );
};

export default Hero;
