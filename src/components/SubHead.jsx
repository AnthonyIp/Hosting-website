import React from 'react';

import './SubHead.css';

const SubHead = () => {
    return (
        <section className="features__subhead bg-light py-3">
            <div className="container grid">
                <div>
                    <h1 className="md">The Hosting Platform</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cupiditate dignissimos temporibus perspiciatis quae! Suscipit
                        qui, consectetur ea consequatur, doloribus repellendus quasi, aut corporis nam alias culpa. Nostrum, inventore accusantium!
                    </p>
                </div>
                <img src="./assets/images/server2.png" alt="server2"/>
            </div>
        </section>
    );
};

export default SubHead;
