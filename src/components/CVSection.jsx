import React from 'react';

export default function CVSection() {
    const timelineItems = [
        {
            type: "work",
            title: "Software Engineer Intern",
            subtitle: "Topia Holdings, Inc.",
            duration: "Aug 2025 - Present",
            location: "Burlington, North Carolina",
        },
        {
            type: "education",
            title: "M.S. in Computer Science",
            subtitle: "University of California, Santa Barbara",
            duration: "Sep 2023 - Present",
            gpa: "GPA: 3.8 / 4.0",
        },
        {
            type: "work",
            title: "Research Assistant",
            subtitle: "National Chung Hsing University / Occupational Safety and Health Admin., MOL",
            duration: "Feb 2021 – Jun 2022",
            location: "Taichung, Taiwan",
        },
        {
            type: "work",
            title: "Research Assistant",
            subtitle: "Taiwan Semiconductor Manufacturing Co., Ltd",
            duration: "Aug 2021 – Dec 2021",
            location: "Taichung, Taiwan",
        },
        {
            type: "education",
            title: "M.B.A. in Management Information Systems",
            subtitle: "National Chung Hsing University",
            duration: "Sep 2020 - Jun 2022",
            gpa: "GPA: 4.12 / 4.3",
        },
        {
            type: "work",
            title: "Software Engineer",
            subtitle: "ShangDa Plastic Inc.",
            duration: "Jun 2020 – Feb 2021",
            location: "Miao-li, Taiwan",
        },
        {
            type: "work",
            title: "Full Stack Developer",
            subtitle: "Wanin International",
            duration: "Mar 2020 – Dec 2020",
            location: "Taichung, Taiwan",
        },
        {
            type: "education",
            title: "Bachelor's in Information Management",
            subtitle: "National Taichung University of Science and Technology",
            duration: "Sep 2018 - Jun 2020",
            gpa: "GPA: 3.99 / 4.0",
        },
    ];

    const renderIcon = (type) => {
        if (type === 'education') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Z"></path>
                </svg>
            );
        } else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                </svg>
            );
        }
    };

    return (
        <div className="w-full bg-base-100 text-base-content">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-primary">Experience</h2>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {timelineItems.map((item, index) => (
                        <li key={index}>
                            {index !== 0 && <hr />}
                            <div className="timeline-middle text-primary">{renderIcon(item.type)}</div>
                            <div
                                className={`
                  timeline-${index % 2 === 0 ? 'start md:text-end' : 'end md:mb-10'} 
                  mb-10 
                  hover:scale-105 transition-transform 
                  pr-6 pl-6
                `}
                            >
                                <div className="text-base font-bold text-base-content">{item.title}</div>
                                <div className="mt-1 font-mono text-sm text-neutral">{item.subtitle}</div>
                                {item.duration && (
                                    <div className="mt-1 font-mono text-xs text-neutral">{item.duration}</div>
                                )}
                                {item.location && (
                                    <div className="mt-1 font-mono text-xs text-neutral">{item.location}</div>
                                )}
                                {item.gpa && (
                                    <div className="mt-1 font-mono text-xs text-neutral">{item.gpa}</div>
                                )}
                            </div>
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
