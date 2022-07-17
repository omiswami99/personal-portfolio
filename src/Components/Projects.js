import React from 'react';
import '../index.css';
import netflix from '../images/netflix.png';
import cctv from '../images/cctv.png';
import billing from '../images/billing.png';

function Projects() {
    return (<>
        <div id="projects">
            <div className="container">
                <h1 className="subtitle">My Projects</h1>
                <div className="project-list">
                    <div className="project">
                        <img src={netflix} alt='img'/>
                        <div className="layer">
                            <h3>Top 5 Netflix Series</h3>
                            <p>It is basic level webpage that displays the top 5 netflix series.</p>
                            <a href="https://omiswami99.github.io/top-5-netflix-series/">Click here</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src={cctv} alt='img'/>
                        <div className="layer">
                            <h3>Criminal Face recognition system using CCTV camera</h3>
                            <p>This project is usefull to find the criminal who are elope by capturing them using cctv camera.</p>
                            <a href="https://omiswami99.github.io/top-5-netflix-series/">Click here</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src={billing} alt='img'/>
                        <div className="layer">
                            <h3>GST Billing application</h3>
                            <p>This application is used to generate the bill including gst tax on each product purchased by the customer.</p>
                            <a href="https://omiswami99.github.io/top-5-netflix-series/">Click here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Projects;