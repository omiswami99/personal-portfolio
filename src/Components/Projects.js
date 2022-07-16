import React from 'react';
import '../index.css';

function Projects() {
    return (<>
        <div id="projects">
            <div className="container">
                <h1 className="subtitle">My Projects</h1>
                <div className="project-list">
                    <div className="project">
                        <img src='../images/netflix.png' alt='img'/>
                        <div className="layer">
                            <h3>Top 5 Netflix Series</h3>
                            <p>It is basic level webpage that displays the top 5 netflix series.</p>
                            <a href="#">Click here</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src='../images/cctv.png' alt='img'/>
                        <div className="layer">
                            <h3>Criminal Face recognition system using CCTV camera</h3>
                            <p>This project is usefull to find the criminal who are elope by capturing them using cctv camera.</p>
                            <a href="#">Click here</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src='../images/billing.png' alt='img'/>
                        <div className="layer">
                            <h3>GST Billing application</h3>
                            <p>This application is used to generate the bill including gst tax on each product purchased by the customer.</p>
                            <a href="#">Click here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Projects;