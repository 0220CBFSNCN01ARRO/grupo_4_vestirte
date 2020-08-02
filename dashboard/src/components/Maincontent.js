import React from 'react';
import Navbar from './Navbar';
import Main from './Main'
function Maincontent(props) {
    return (
        <div id="content">
            <Navbar/>   
            <Main/>         
        </div>
    );
}

export default Maincontent;