import React from 'react';
import logo from '../img/logo-white-horizontal.png';

const MyFooter = () => {
    return (
        <footer className="footer">
            <img className="footer-logo my-3" src={logo} alt="Hopo Logo" />
            <p className="footer-text1 my-3">Ready to improve your travelling experience?</p>
            <p className="footer-text2 my-1">For more information:</p>
            <p className="footer-text3 my-1">info@hopo.app</p>
        </footer>
    );
}
 
export default MyFooter;