import React from 'react';
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, I'm Allan Lucky</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full-Stack Developer</span>
                    </h1>
                    <p className="hero--section--description">
                        I’m a <strong>Full-Stack Developer</strong> with a strong passion for crafting dynamic web applications that deliver exceptional user experiences. I specialize in both <strong>front-end</strong> and <strong>back-end development</strong>, ensuring seamless integration, performance, and functionality across the entire stack.
                    </p>
                </div>
                <Link to="/contact-me">
                    <button className="btn btn-primary">Let's Work Together</button>
                </Link>
            </div>

            <div className="hero--section--img">
                <img
                    src={`${process.env.PUBLIC_URL}/images/allan.jpg`}
                    alt="Portrait of Allan Lucky - Full-Stack Developer"
                />
            </div>
        </section>

    );
}

