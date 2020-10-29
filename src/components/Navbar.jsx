import React  from 'react';

import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container flex">
                <h1 className="navbar__logo">Hosting.</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/docs">Docs</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
