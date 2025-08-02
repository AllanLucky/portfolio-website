import React from 'react';
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section-content">
                    <p className="section--title">I'm Allan Lucky,</p>
                    <h1 className="hero--section--title">
                        A <span className="hero--section-title--color">Full-Stack</span> Developer
                    </h1>
                    <p className="hero--section-description">
                        I’m a FullStack Developer skilled in React, Vue.js, Node.js, Laravel, PHP, and Android development.
                    </p>
                    <p className="hero--section-description">
                        I hold a Diploma in Software Development from IST, and I’ve built real-world projects solving meaningful problems.
                    </p>
                    <p className="hero--section-description">
                        I value clean code, collaboration, and scalable solutions. Open to freelance or full-time roles — let’s connect!
                    </p>
                </div>

                <Link to="/contact-me">
                    <button className="btn btn-primary">Get In Touch With Me</button>
                </Link>
            </div>

            <div className="hero--section--img">
                <img src="/images/allan.jpg" alt="Allan Lucky" />
            </div>
        </section>
    );
}
