import React from "react";
import data from "../../data/index.json";

export default function MyPortfolio() {
    return (
        <>
            <section className="portfolio--section" id="portfolio">
                <h2 className="section--title--box">View Projects</h2>
                <div className="github-button-container">
                    {/* Optional: Add a link to your GitHub here */}
                </div>
                <div className="portfolio--grid">
                    {data.portfolio.map((project) => (
                        <div className="portfolio--card" key={project.id}>
                            <img
                                src={`${process.env.PUBLIC_URL}/${project.image}`}
                                alt={project.title}
                                className="portfolio--image"
                            />
                            <h3 className="portfolio--title">{project.title}</h3>
                            <p className="portfolio--description">{project.description}</p>

                            {/* View Project Button */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="portfolio--button"
                            >
                                View Project
                            </a>

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

