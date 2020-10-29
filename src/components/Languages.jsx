import React from 'react';

import './Languages.css';

const Languages = () => {
    return (
        <section className="languages">
            <h2 className="md text-center my-2">
                Supported Languages
            </h2>
            <div className="container flex">
                <div className="card">
                    <h4>Node.js</h4>
                    <img src="../assets/images/logos/node.png" alt="Node.js"/>
                </div>
                <div className="card">
                    <h4>Python</h4>
                    <img src="../assets/images/logos/python.png" alt="Python"/>
                </div>
                <div className="card">
                    <h4>C#</h4>
                    <img src="../assets/images/logos/csharp.png" alt="C#"/>
                </div>
                <div className="card">
                    <h4>Ruby</h4>
                    <img src="../assets/images/logos/ruby.png" alt="Ruby"/>
                </div>
                <div className="card">
                    <h4>PHP</h4>
                    <img src="../assets/images/logos/php.png" alt="PHP"/>
                </div>
                <div className="card">
                    <h4>Scala</h4>
                    <img src="../assets/images/logos/scala.png" alt="Scala"/>
                </div>
                <div className="card">
                    <h4>Clojure</h4>
                    <img src="../assets/images/logos/clojure.png" alt="Clojure"/>
                </div>
            </div>
        </section>
    );
};

export default Languages;
