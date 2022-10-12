import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="bg-dark text-white text-center mt-5 p-3">
                <div className="footer-social-icon pt-5">
                <a href="/"><i className="fab fa-linkedin"></i></a>
                <a href="/"><i className="fab fa-twitter-square"></i></a>
                <a href="/"><i className="fab fa-instagram-square"></i></a>
                <a href="/"><i className="fab fa-facebook"></i></a>
                </div>
                <div className="footer-menu">
                <a href="/">Contact Us</a>
                <a href="/">Terms of Dervices</a>
                <a href="/">Privecy Policy</a>
                <a href="/">Privacy Settings</a>
                </div>
            </div>
            <div className="bg-black text-white text-center p-3 pb-1">
                <p>
                @Asif Ullah Sikder, All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;