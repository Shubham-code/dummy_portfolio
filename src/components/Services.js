import React,{useState} from 'react';
import {FaGithub, FaCamera, FaHubspot, FaApple, FaFileVideo, FaSearchPlus} from 'react-icons/fa';


const Services = () => {

    const [header]=useState({
                                heading:'Services',
                                 mainHeader:"My Services",
                                mainContent:"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem."
                            });

    const [boxes] = useState([
        {
            id:1,
            icon:<FaGithub />,
            heading:"Web Developement",
            text:"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem."
        },
        {
            id:2,
            icon:<FaCamera />,
            heading:"Photography",
            text:"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem."
        },
        {
            id:3,
            icon:<FaHubspot />,
            heading:"Hubspot",
            text:"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem."
        },
        {
            id:4,
            icon:<FaApple />,
            heading:"App Developing",
            text:"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem."
        },
        {
            id:5,
            icon:<FaFileVideo />,
            heading:"Video Editing",
            text:"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem."
        },
        {
            id:6,
            icon:<FaSearchPlus />,
            heading:"SEO Expert",
            text:"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem."
        }
    ]);

    return (
        <div className="services">
            <div className="container">
                <div className="service__header">
                    <div className="common">
                        <h3 className="heading">{header.heading}</h3>
                        <h1 className="mainHeader">{header.mainHeader}</h1>
                        <p className="mainContent">{header.mainContent}</p>
                    </div>
                    <div className="rangde"></div> 
                    
                    <div className="row">
                        {boxes.map((info,index) => (
                            <div  key={index} className="col-4">
                                <div  className="services__box">
                                    <button className="common-logo">{info.icon}</button> 
                                    <div className="services__box-header">{info.heading}</div>
                                    <div className="services__box-p">{info.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>          
            </div>
        </div>
    )
}

export default Services;
