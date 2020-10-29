import React, {lazy, Suspense} from "react";
import {Route, Switch}         from 'react-router-dom';

import Navbar        from "./components/Navbar";
import Footer        from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Spinner       from "./components/Spinner";

import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const Features = lazy(() => import('./pages/FeaturesPage'));
const Docs = lazy(() => import('./pages/DocsPage'));
// const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner/>}>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/features" component={Features}/>
                        <Route exact path="/docs" component={Docs}/>
                        {/*<Route component={PageNotFound}/>*/}
                    </Suspense>
                </ErrorBoundary>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
