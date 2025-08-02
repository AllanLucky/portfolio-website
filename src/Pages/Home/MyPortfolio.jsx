import React from "react";
import data from "../../data/index.json";
export default function MyPortfolio() {
    return (
        <>
            <section className="portfolio--section" id="portfolio">
                <h2 className="section--title" style={{ marginTop: "50px" }}>View Projects</h2>
                <div className="github-button-container">
                </div>
                <div className="portfolio--grid">
                    {data.portfolio.map((project) => (
                        <div className="portfolio--card" key={project.id}>
                            <img src={project.image} alt={project.title} className="portfolio--image" />
                            <h3 className="portfolio--title">{project.title}</h3>
                            <p className="portfolio--description">{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
