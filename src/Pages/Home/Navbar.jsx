import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => setNavActive(!navActive);
    const closeMenu = () => setNavActive(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) closeMenu();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) closeMenu();
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="logo">
                <img src="/images/logo.png" alt="Logo" />
            </div>

            <div className={`nav_hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav_hamburger_line"></span>
                <span className="nav_hamburger_line"></span>
                <span className="nav_hamburger_line"></span>
            </div>

            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li><Link to="/" className="navbar--content" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/portfolio" className="navbar--content" onClick={closeMenu}>Portfolio</Link></li>
                    <li><Link to="/about-me" className="navbar--content" onClick={closeMenu}>About Me</Link></li>
                    <li><Link to="/testimonials" className="navbar--content" onClick={closeMenu}>Testimonials</Link></li>
                    <li><Link to="/contact-me" className="btn btn-outline-primary" onClick={closeMenu}>Contact Me</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
