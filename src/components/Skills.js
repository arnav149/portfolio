import React from 'react';

class Skills extends React.Component
{
  render()
  {
    return(
      <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading animate-box">My Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <p>I'm always trying to add things to my skillset and work consistently to get better at things I already know. I have a very good understanding of essential Data Structures and Algorithms which is necessary to become a good software engineer.</p>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3><strong>Java</strong></h3>
                </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3><strong>C++</strong></h3>

              </div>
            </div>
            {/* <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3><strong>Swift</strong></h3>
              </div>
            </div> */}
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3><strong>HTML, CSS, JavaScript, ReactJS and NodeJS</strong></h3>

              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3><strong>PostgreSQL</strong></h3>

              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3><strong>Git and Github</strong></h3>

              </div>
            </div>

          </div>

          <div>
          <br/><br/>
          <div className="row">
          <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
            <div className="services color-3">
              <span className="icon2"><i className="icon-data" /></span>
              <h3>Data Structures and Algorithms</h3>
            </div>
          </div>
            <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
              <div className="services color-2">
                <span className="icon2"><i className="icon-globe-outline" /></span>
                <h3>Web Development</h3>
              </div>
            </div>
            {/* <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
              <div className="services color-4">
                <span className="icon2"><i className="icon-phone3" /></span>
                <h3>iOS App Development</h3>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div className="hire">
                <h2>I have successfully leveraged<br />my skills at 5+ hackathons and programming competitions!</h2>
              </div>
            </div>
            </div>

          </div>
        </div>
      </section>

    )
  }
}

export default Skills;
