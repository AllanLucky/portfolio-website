import React from "react";
import data from "../../data/index.json";

export default function MySkills() {
    return (
        <section className="skills-section" id="mySkills">
            <div className="skills-header">
                <h2 className="section-subtitle">My Skills</h2>
            </div>
            <div className="skills-container">
                {data?.skills?.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-icon">
                            <img
                                src={`${process.env.PUBLIC_URL}/${skill.images}`}
                                alt={skill.title}
                            />
                        </div>
                        <h3 className="skill-title">{skill.title}</h3>
                        <p className="skill-description">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

