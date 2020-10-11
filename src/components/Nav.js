import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                     <div className="navbar__left-logo">
                         <img src="/image/logo.png" alt="brand_logo" />
                     </div>
                 </ul>

                 <ul className="navbar__right">
                     <li><a href="#home">Home</a></li>

                     <li><a href="#services">Services</a></li>

                     <li><a href="#about">About</a></li>

                     <li><a href="#skills">Skills</a></li>

                     <li><a href="#portfolio">Portfolio</a></li>

                     <li><a href="#blog">Blog</a></li>

                     <li><a href="#contact">Contact</a></li>
                 </ul>
                </div>
                 
            </div>
        </nav>
    );
};

export default Nav;
