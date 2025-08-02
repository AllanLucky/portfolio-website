import React from 'react';
export default function ContactMe() {
    return (
        <section className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            <form className="contact-form-container">
                <div className="container">
                    <label className="contact-label">
                        <span>First Name</span>
                        <input type="text" className="contact-input" placeholder="Enter your first name" required />
                    </label>

                    <label className="contact-label">
                        <span>Last Name</span>
                        <input type="text" className="contact-input" placeholder="Enter your last name" required />
                    </label>
                </div>

                <div className="container">
                    <label className="contact-label">
                        <span>Email</span>
                        <input type="email" className="contact-input" placeholder="Enter your email" required />
                    </label>

                    <label className="contact-label">
                        <span>Phone Number</span>
                        <input type="tel" className="contact-input" placeholder="Enter your phone number" required />
                    </label>
                </div>

                <label className="contact-label">
                    <span>Choose Topic</span>
                    <select className="contact-select" required>
                        <option value="">Select one</option>
                        <option value="project">Project Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="feedback">General Feedback</option>
                    </select>
                </label>

                <label className="contact-label">
                    <span>Message</span>
                    <textarea className="contact-textarea" placeholder="Type your message..." required></textarea>
                </label>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </section>
    );
}
