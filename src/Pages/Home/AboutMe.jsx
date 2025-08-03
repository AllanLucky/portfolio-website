export default function AboutMe() {
    return (
        <section id="AboutMe" className="adout-section">
            <div className="about-section-img">
                <img
                    src={process.env.PUBLIC_URL + "/images/allan.jpg"}
                    alt="Profile of Allan Lucky"
                />
            </div>
            <div className="hero-section-content-box">
                <h1 className="skills-section-heading">About Me</h1>

                <p className="about--section--description">
                    I'm <strong>Allan Lucky</strong>, a passionate and results-driven <strong>Full-Stack Developer</strong> with a strong commitment to delivering clean, efficient, and scalable digital solutions.
                </p>

                <p className="about--section--description">
                    I specialize in modern technologies including <strong>React.js, Vue.js, Node.js, Laravel, PHP</strong>, and <strong>Android development</strong>. I hold a <strong>Diploma in Software Development</strong> from the <strong>Institute of Software Technologies (IST)</strong>, where I built a solid foundation in software engineering principles and real-world application.
                </p>

                <p className="about--section--description">
                    My work spans both frontend and backend development, allowing me to craft seamless user experiences and robust server-side logic. I enjoy collaborating on cross-functional teams and bringing ideas to life through agile and efficient development workflows.
                </p>

                <p className="about--section--description">
                    I'm driven by a continuous desire to learn and grow. I actively keep up with emerging technologies and best practices, and I'm always looking for ways to write better code, improve performance, and enhance user engagement.
                </p>

                <p className="about--section--description">
                    I’m currently open to <strong>freelance</strong> and <strong>full-time</strong> opportunities that allow me to contribute to innovative projects and make a meaningful impact through technology.
                </p>
            </div>
        </section>
    );
}

