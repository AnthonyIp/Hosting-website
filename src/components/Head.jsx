import React from 'react';

import './Head.css'

const Head = ({styleName,title, text, img}) => {
    return (
        <section className={`${styleName} bg-primary py-3`}>
            <div className="container grid">
                <div>
                    <h1 className="xl">{title}</h1>
                    <p className="lead">{text}</p>
                </div>
                <img src={img} alt={title}/>
            </div>
        </section>
    );
};

export default Head;
