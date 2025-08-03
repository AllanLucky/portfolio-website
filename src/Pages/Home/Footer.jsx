import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer--container">
            <div className="footer--link--container">
                <div className="footer--logo">
                    AllanLucky
                </div>

                <div className="footer--items">
                    <ul className="footer--nav--horizontal">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/portfolio", label: "Portfolio" },
                            { to: "/about-me", label: "About Me" },
                            { to: "/contact-me", label: "Contact" },
                            { to: "/testimonials", label: "Testimonials" },
                        ].map(({ to, label }) => (
                            <li key={to}>
                                <RouterLink to={to} className="text-md">
                                    {label}
                                </RouterLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer--social--icon">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                    <a href="https://www.instagram.com/luckynondanonda/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>

            <hr className="divider" />

            <div className="footer--content--container">
                <p className="footer--content">
                    © {new Date().getFullYear()} All rights reserved. Developed by Allan Lucky.
                </p>

                <div className="footer--legal">
                    <ul className="footer--nav--horizontal">
                        {[
                            { to: "/privacy-policy", label: "Privacy Policy" },
                            { to: "/terms-of-service", label: "Terms of Service" },
                            { to: "/cookies-settings", label: "Cookies Settings" },
                        ].map(({ to, label }) => (
                            <li key={to}>
                                <RouterLink to={to} className="text-sm">
                                    {label}
                                </RouterLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


