import React from 'react';
import './index.css';
import Header from './Components/Header.js';
import About from './Components/About.js';
import Skills from './Components/Skills.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';

function App() {
    return (<>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <div className="copyright">
            <p>Copyright © 2022 @onkarswami | All rights reserved </p>
        </div>
    </>);
}

export default App;