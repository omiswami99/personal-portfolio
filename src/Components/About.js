import React from 'react';
import '../index.css';
import me from '../images/me.png';


      var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");
    
      var tablink = '';
      var tabcontent = '';

      function openTab(tabname, event){
          for(tablink of tablinks){
            tablink.classList.remove("active");
          }

          for(tabcontent of tabcontents){
            tabcontent.classList.remove("activeTab");
          }
        //   event.currentTarget.classList.add("active");
          event.currentTarget.classList.add("active");
          document.getElementById(tabname).classList.add("activeTab");
        
      }



function About() {
    return (<>

        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={me} alt="img1" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="subtitle">About Me</h1><br/><br/>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
                        lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>

                        <div className="tab-titles">
                            <p className="tab-links active" onClick={openTab.bind('skills')}>Skills</p>
                            <p className="tab-links" onClick={openTab.bind('experience')}>Experience</p>
                            <p className="tab-links" onClick={openTab.bind('education')}>Education</p>
                        </div>

                        <div className="tab-contents activeTab" id="skills">
                            <ul>
                                <li><span>Web Developer</span><br/> Blockchain</li>
                                <li><span>Programmer</span><br/> React</li>
                                <li><span>Good Listener</span><br/> Blockchain</li>
                            </ul>
                        </div>

                        <div className="tab-contents" id="experience">
                            <ul>
                                <li><span>Nope</span></li>
                            </ul>
                        </div>

                        <div className="tab-contents" id="education">
                            <ul>
                                <li><span>2013-2018</span><br/> 5th to 10th</li>
                                <li><span>2018-2021</span><br/> Diploma</li>
                                <li><span>2021-2024</span><br/> B.E.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default About;