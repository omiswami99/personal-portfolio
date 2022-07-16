import React from 'react';
import '../index.css';

function Skills() {
    return (<>
        <div id="skills">
            <div className="container">
                <h1 className="subtitle">My Skills</h1>
                <div className="skill-list">
                    <div>
                        <h2>Full Stack Developer</h2><br /><hr/>
                        <p>I have skills for full stack development under the tech stack: PHP, HTML,CSS,JS and MySQL.</p>
                    </div>
                    <div>
                        <h2>Competitive Programming</h2><br /><hr/>
                        <p>I am efficient competitive coder. I give contests at GFG, LeetCode and CodeChiefs</p>
                    </div>
                    <div>
                        <h2>Blockchain Developer</h2><br /><hr/>
                        <p>I am currently in learning phase of blockchain development where I am studying Ethereum blockchain using Solidity</p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Skills;