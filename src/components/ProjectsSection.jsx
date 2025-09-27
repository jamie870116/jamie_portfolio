import React from 'react';

export default function ProjectsSection() {
    const projects = [
        {
            title: 'Multi-Agent Robotic Systems with LLM-Driven Coordination',
            subtitle: 'Feb 2025 - Present',
            description: 'Implemented orchestration pipelines for multi-robot coordination in AI2-THOR, integrating OpenAI GPT APIs for task planning, allocation, and adaptive replanning.',
            github: 'https://github.com/jamie870116/mas',
            image: '/assets/workflow.png',
            skills: ['Python', 'LLM', 'Prompt Engineering', 'Robotics'],
        },
        {
            title: 'Indoor Navigation with AR for Emergencies',
            subtitle: 'Apr 2024 - Jun 2024',
            description: `Developed an AR iOS app using Swift, ARKit, and CoreML to assist with indoor navigation during emergencies. Utilized device sensors for obstacle detection and synced with cloud databases for floor plans.`,
            image: '/assets/indoor.png',
            github: 'https://github.com/jamie870116/CS291I-Spr24-Final-Project',
            skills: ['Swift', 'ARKit', 'CoreML', 'Firebase'],
        },
        {
            title: 'AgentUTest',
            subtitle: 'Feb 2024 - Mar 2024',
            description: `Built an automated testing tool supporting multiple languages with agent-driven mechanisms. Integrated GPT-4 for test case generation and developed a dynamic visualization interface.`,
            image: '/assets/AgentUTest.png',
            github: 'https://github.com/jamie870116/CS272',
            skills: ['OpenAI', 'React', 'Django', 'JavaScript'],
        },
        {
            title: 'Library Book Donation Management System',
            subtitle: 'Mar 2020 - Dec 2020',
            description: `Created a responsive website and management system that reduced data input time by 70%. Used PHP Laravel for the backend and jQuery with Bootstrap for the frontend.`,
            image: '/assets/wanin.png',
            github: 'https://github.com/jamie870116/waninlibary',
            skills: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap'],
        },
        {
            title: 'Manufacturing Information Management System',
            subtitle: 'Jun 2020 - Feb 2021',
            description: `Developed a system to manage customer info, procurement, and inventory, increasing data input efficiency by 50% and eliminating human errors. Built with PHP Laravel (backend), MySQL, and Vue.js (frontend).`,
            image: '/assets/Shangda.jpg',
            github: 'https://www.shangda.com.tw/',
            skills: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Vue.js', 'Nginx'],
        },
    ];

    return (
        <section className="w-full bg-base-100 text-base-content">
            <div className="max-w-6xl mx-auto px-4 sm:px-10 md:px-20 lg:px-40 py-12">
                <h2 className="text-2xl font-bold text-center mb-6 text-primary">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full rounded-lg overflow-hidden bg-base-200 transition-shadow shadow-sm hover:shadow-lg"
                        >
                            {/* Image wrapper with permanent shadow */}
                            <div className="shadow bg-white">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full aspect-video object-contain"
                                />
                            </div>

                            <div className="flex flex-col p-6">
                                <p className="text-base-content text-lg font-bold">{project.title}</p>
                                <p className="text-neutral text-xs mb-2">{project.subtitle}</p>
                                <p className="text-sm text-neutral mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs bg-secondary text-secondary-content rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 text-sm text-info hover:underline"
                                >
                                    Take a look
                                </a>
                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </section>
    );
}
