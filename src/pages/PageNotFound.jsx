import React  from 'react';
import {Link} from "react-router-dom";

import './pagenotfound.css';

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <div className="pageNotFound__container">
                <img className="pageNotFound__image" src="https://www.salehriaz.com/404Page/img/404.svg" alt=""/>
                <h1>Page Not Found</h1>
                <p>Please, click <Link to="/"><strong>here</strong></Link> to be redirected to the homepage</p>
            </div>
        </div>
    );
};

export default PageNotFound;
