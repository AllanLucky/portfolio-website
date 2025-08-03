import React from 'react';
import data from '../../data/index.json';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
    return (
        <section className="testimonials--section" id="testimonials">
            <div className="portfolio--container-box">
                <p className="sub--title">Testimonials</p>
                <h2 className="sections--heading">What Clients Say About Me</h2>
            </div>

            <div className="portfolio--section--container">
                {data.testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial--section--card">
                        <p className="testimonial--description">{testimonial.description}</p>

                        <div className="testimonial--stars">
                            {[...Array(parseInt(testimonial.count))].map((_, index) => (
                                <FaStar key={index} className="testimonial--star green-star" />
                            ))}
                        </div>

                        <div className="testimonial--section--card--author--detail">
                            <img
                                src={`${process.env.PUBLIC_URL}${testimonial.image}`}
                                alt={testimonial.author_name}
                                className="testimonial--image"
                            />
                            <div className="testimonial--section--card--author--reviews">
                                <p className="testimonial--author--name">{testimonial.author_name}</p>
                                <p className="testimonial--author--designation">{testimonial.author_description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
