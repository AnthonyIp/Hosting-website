import React, {useState} from 'react';

import './Showcase.css';
import {Link}            from "react-router-dom";

const Showcase = () => {
    const [companyInfo, setCompanyInfo] = useState({name: '', company: '', email: ''});

    const handleChange = event => {
        const {name, value} = event.target;
        setCompanyInfo({...companyInfo, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    return (
        <section className="showcase">
            <div className="container grid">
                <div className="showcase__text">
                    <h1>Easier Deployment</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt dolore eius, eligendi est facilis id mollitia
                        necessitatibus, nemo obcaecati praesentium quam quas recusandae sint voluptas! Consequuntur error pariatur ullam.</p>
                    <Link to={"features"} className="btn btn-outline">Read More</Link>
                </div>

                <div className="showcase__form card">
                    <h2>Request a Demo</h2>
                    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact"/>
                        <p className="hidden">
                            <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
                        </p>
                        <div className="form-control">
                            <input type="text" name="name" placeholder="Name" onChange={handleChange} required/>
                        </div>
                        <div className="form-control">
                            <input type="text" name="company" placeholder="Company Name" onChange={handleChange} required/>
                        </div>
                        <div className="form-control">
                            <input type="text" name="email" placeholder="Email" onChange={handleChange} required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
