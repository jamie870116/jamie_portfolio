import React from 'react';
import { SiJavascript, SiCplusplus, SiSwift, SiDjango, SiPytorch, SiTypescript } from 'react-icons/si';
import { FaPython, FaReact, FaAws, FaLinux, FaGit } from 'react-icons/fa';

export default function TechStackSection() {
    return (
        <section id="tech-stack" className="relative isolate px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-base-100 text-base-content">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-2xl font-bold text-center mb-6 text-primary">My Skill Sets</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="tech-category">
                        <h4 className="text-lg font-semibold leading-tight pb-3 text-center text-base-content">Programming Languages</h4>
                        <div className="tech-icons flex flex-wrap gap-3 items-center justify-center">
                            <SiTypescript
                            title="TypeScript"
                            className="h-8 w-8 text-[#3178c6] hover:scale-110 transition-transform duration-200"
                            aria-label="TypeScript"
                            />
                            <SiJavascript
                                title="JavaScript"
                                className="h-8 w-8 text-[#f7df1e] hover:scale-110 transition-transform duration-200"
                                aria-label="JavaScript"
                            />

                            <FaPython
                                title="Python"
                                className="h-8 w-8 text-[#3776ab] hover:scale-110 transition-transform duration-200"
                                aria-label="Python"
                            />
                            <SiCplusplus
                                title="C++"
                                className="h-8 w-8 text-[#00599c] hover:scale-110 transition-transform duration-200"
                                aria-label="C++"
                            />
                            <SiSwift
                                title="Swift"
                                className="h-8 w-8 text-[#f05138] hover:scale-110 transition-transform duration-200"
                                aria-label="Swift"
                            />
                        </div>
                    </div>

                    <div className="tech-category">
                        <h4 className="text-lg font-semibold leading-tight pb-3 text-center text-base-content">Frameworks & Libraries</h4>
                        <div className="tech-icons flex flex-wrap gap-3 items-center justify-center">
                            <FaReact
                                title="ReactJS"
                                className="h-8 w-8 text-[#61dafb] hover:scale-110 transition-transform duration-200"
                                aria-label="ReactJS"
                            />
                            <SiDjango
                                title="Django"
                                className="h-8 w-8 text-[#092e20] hover:scale-110 transition-transform duration-200"
                                aria-label="Django"
                            />
                            <SiPytorch
                                title="PyTorch"
                                className="h-8 w-8 text-[#ee4c2c] hover:scale-110 transition-transform duration-200"
                                aria-label="PyTorch"
                            />
                        </div>
                    </div>

                    <div className="tech-category">
                        <h4 className="text-lg font-semibold leading-tight pb-3 text-center text-base-content">Tools & Platforms</h4>
                        <div className="tech-icons flex flex-wrap gap-3 items-center justify-center">
                            <FaAws
                                title="AWS"
                                className="h-8 w-8 text-[#ff9900] hover:scale-110 transition-transform duration-200"
                                aria-label="AWS"
                            />
                            <FaLinux
                                title="Linux"
                                className="h-8 w-8 text-[#fcc624] hover:scale-110 transition-transform duration-200"
                                aria-label="Linux"
                            />
                            <FaGit
                                title="Git"
                                className="h-8 w-8 text-[#f05032] hover:scale-110 transition-transform duration-200"
                                aria-label="Git"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <a
                    href="https://drive.google.com/file/d/1sY6WnRYEXGUOvvnsqdSiJXSp2avx4Xj2/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary hover:btn-secondary transition-colors"
                >
                    View My Latest Resume
                </a>
            </div>
        </section>
    );
}
