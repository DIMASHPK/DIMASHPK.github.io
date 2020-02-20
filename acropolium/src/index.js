import React, {useEffect}from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, useLocation} from "react-router-dom";
import App from './App';


function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop />
        <App/>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

