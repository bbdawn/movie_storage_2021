import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about_container">
            <div className="aboutus">
                <div className="title">Movie Storage</div>
                <div className="horizen"></div>
            </div>
            <div className="explanation">
                <div className="developer">
                    <img src={require("../image/teamwork.png").default} alt="developer" height="80px"/>
                    <div>
                        <span>Developer</span><br />
                        Joohyun Lee<br />
                        Won Kim
                    </div>
                </div>
                <div className="data">
                    <img src={require("../image/database.png").default} alt="database" height="80px"/>
                    <div>
                    <span>Movie Api</span><br />
                        YTS.MX
                    </div>
                </div>
                <div className="tools">
                    <img src={require("../image/development.png").default} alt="tools" height="80px"/>
                    <div>
                        <span>Tools</span><br />
                        HTML 5<br />
                        CSS 3<br />
                        Javascript<br />
                        React
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;