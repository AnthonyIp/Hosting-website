import React        from 'react';

import SubHead      from "../components/SubHead";
import Head         from "../components/Head";
import FeaturesMain from "../components/FeaturesMain";

import './FeaturesPage.css';

const Features = () => {
    return (
        <div className="features">
            <Head
                styleName={'features__head'}
                title={'Features'}
                text={'Check out the features of Hosting that separate us from the competition'}
                img={'./assets/images/server.png'}
            />
            <SubHead/>
            <FeaturesMain/>
        </div>
    );
};

export default Features;
