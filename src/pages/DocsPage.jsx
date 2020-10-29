import React    from 'react';

import './DocsPage.css';
import Head     from "../components/Head";
import DocsMain from "../components/DocsMain";

const Docs = () => {
    return (
        <div className="docs">
            <Head
                styleName={'docs__head'}
                title={'Docs'}
                text={'Learn how to work with the Hosting platform'}
                img={'./assets/images/docs.png'}
            />
            <DocsMain/>
        </div>
    );
};

export default Docs;
