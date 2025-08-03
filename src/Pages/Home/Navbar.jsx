import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [navACTIVE, setNavACTIVE] = useState(false);

    const toggleNav = () => {
        setNavACTIVE(!navACTIVE);
    };

    const closeMenu = () => {
        setNavACTIVE(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navACTIVE ? 'active' : ''}`}>
            <div className="navbar--brand">
                <h1 className="navbar--logo">AllanLucky</h1>
                <div className={`nav--hamburger ${navACTIVE ? 'active' : ''}`} onClick={toggleNav}>
                    <span className="nav--hamburger--line"></span>
                    <span className="nav--hamburger--line"></span>
                    <span className="nav--hamburger--line"></span>
                </div>
            </div>

            <div className={`navbar--items ${navACTIVE ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClassName="navbar--active-content"
                            to="/"
                            className="navbar--content"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClassName="navbar--active-content"
                            to="portfolio"
                            className="navbar--content"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClassName="navbar--active-content"
                            to="about-me"
                            className="navbar--content"
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClassName="navbar--active-content"
                            to="testimonials"
                            className="navbar--content"
                        >
                            Testimonials
                        </Link>
                    </li>
                </ul>
            </div>

            <Link
                onClick={closeMenu}
                activeClassName="navbar--active-content"
                to="contact-me"
                className="btn btn-outline-primary"
            >
                Contact Me
            </Link>
        </nav>
    );
}

export default Navbar;




