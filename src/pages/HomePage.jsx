import React     from 'react';
import Showcase  from "../components/Showcase";
import Stats     from "../components/Stats";
import CLI       from "../components/CLI";
import Cloud     from "../components/Cloud";
import Languages from "../components/Languages";

import './HomePage.css';
import '../components/Responsive.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <Showcase/>
            <Stats/>
            <CLI/>
            <Cloud/>
            <Languages/>
        </div>
    );
};

export default HomePage;
