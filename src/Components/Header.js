import React from 'react';
import '../index.css';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

var sidemenus = document.getElementById("sidemenu");

function openmenu() {
    sidemenus.style.right = "0";
}

function closemenu() {
    sidemenus.style.right = "-200px";
}

function Header() {
    return (<>

        <div id="header">
            <div className="container">
                <div className="ndiv">
                    <nav>
                        <h1 className="logo" style={{ fontSize: "40px" }}><span style={{ color: "#ff004f" }}>My</span>Portfolio</h1>
                        <ul id="sidemenu">
                            <li><a href='#header'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#contact'>Contact</a></li>
                            <FaTimes className='fas' onClick={closemenu} />
                        </ul>
                        <FaBars className='fas' onClick={openmenu} />
                    </nav>
                </div>
                <div className="headerText">
                    <h1>Hi, I'm <span>Onkar</span> Swami.</h1>
                    <h1>Student at PICT.</h1>
                </div>
            </div>
        </div>

    </>);
}


export default Header;