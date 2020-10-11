import React,{useState} from 'react';

const About = () => {

    const [aboutpage] = useState({
        heading:"About Me",
        text:"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem."
    });

    return (
        <div className="whole_about_section">
            <div className="container">
                <div className="about__heading">
                    <h1 className="about_heading_heading">{aboutpage.heading}</h1>
                    <p className="about_heading_text">{aboutpage.text}</p>
                    <div className="rangde"></div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="/image/me-alt.png" alt="about_chhokra"></img>
                        </div>
                    </div>
                        <div className="col-6">
                        <div className="about text_right">
                            <h2 className="text_heading">Hi There</h2>
                            <p className="about_p-text">
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem. Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem. Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem. Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem. Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.
                             </p>

                        <div className="row">
                            <h1 className="contact__heading">Contact</h1>
                        </div>
                       
                        <div className="row">
                            <div className="col-6">
                                <strong className="strong_text">Name :</strong>
                                 <p>Janathon Doe</p><br></br>
                                <strong className="strong_text">Phone :</strong>
                                 <p>+91 7897739XXX</p>
                             </div>
                            <div className="col-6">
                                 <strong className="strong_text">Email :</strong>
                                 <p>example@domain.com</p><br></br>
                                 <strong className="strong_text">LinkedIn :</strong>
                                 <p>Janathon_123</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default About;
