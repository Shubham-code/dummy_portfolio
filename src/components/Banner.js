import React,{useState} from 'react';
import {FaFacebookF,FaTwitter,FaInstagram,FaPinterest,FaPlay} from 'react-icons/fa';


const Banner = () => {
    const [state] = useState(
        {title:"I am Janathon Doe",
        text:"I'm Janathon, front end developer, having experience of creating 50 dummy projects.",
        img:"/image/man-01.png"
    });

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                <li><a href="https://www.facebook.com/" rel="noopener" ><FaFacebookF /></a></li>
                                <li><a href="https://twitter.com/"  rel="noopener" ><FaTwitter /></a></li>
                                <li><a href="https://www.instagram.com/" rel="noopener" ><FaPinterest /></a></li>
                                <li><a href="https://in.pinterest.com/" rel="noopener"><FaInstagram /></a></li>
                                </ul>
                            <h1>{state.title}</h1>
                            <p>{state.text}</p>
                            <div className="header__btn">
                                <a href="#btn" className="btn btn-outline">My Portfolio</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="#btn" className="btn btn-smart"><FaPlay /></a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="aadmi">
                            <img src={state.img} alt="aadmi" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner;

