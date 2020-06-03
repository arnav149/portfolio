import React from 'react';

class Projects extends React.Component
{
  render()
  {
    return(
      <section className="colorlib-work" data-section="work">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <a href="https://github.com/arnav149/face-recognition">
                <div className="project" style={{backgroundImage: 'url(images/fr.gif)'}}>
                  <div className="desc">
                    <div className="con">
                      <h3>Project 01</h3>
                      <span>Face Recognition</span>
                    </div>
                  </div>
                </div>
               </a>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <a href="https://arnav149.github.io/robo-friends/">
                <div className="project" style={{backgroundImage: 'url(images/robo.jpg)'}}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">Project 02</a></h3>
                      <span>Robo Friends</span>
                    </div>
                  </div>
                </div>
               </a>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
                <a href="https://github.com/arnav149/sunhacks2018speedmaster/tree/master/speed-limiter">
                <div className="project" style={{backgroundImage: 'url(images/speed.jpg)'}}>
                  <div className="desc">
                    <div className="con">
                      <h3>Project 03</h3>
                      <span>SpeedMaster</span>
                    </div>
                  </div>
                </div>
                </a>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
              <a href="https://github.com/arnav149/smart-switch-prototype">
                <div className="project" style={{backgroundImage: 'url(./images/switch.jpg)'}}>
                  <div className="desc">
                    <div className="con">
                      <h3>Project 04</h3>
                      <span>Smart Switch</span>
                    </div>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

// <div className="row">
//   <div className="col-md-12 animate-box">
//     <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
//   </div>
// </div>

export default Projects;
