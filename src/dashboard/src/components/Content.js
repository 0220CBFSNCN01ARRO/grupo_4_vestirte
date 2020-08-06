import React from 'react'; 
import Maincontent from './Maincontent';
import Footer from './Footer'
function Content(props) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <Maincontent/>
            <Footer/>
        </div>
    );
}

export default Content;