import React from 'react';

class Sidebar extends React.Component
{
  render()
  {
    return(
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
        {/* eslint-disable-next-line*/}
        <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
            <h1 id="colorlib-logo"><a href="index.html">Arnav Kasturia</a></h1>
            <span className="position">Arizona State University<br/>Computer Systems Engineering</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                <li><a href="#about" data-nav-section="about">About</a></li>
                <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                <li><a href="#work" data-nav-section="work">Projects</a></li>
                <li><a href="#education" data-nav-section="education">Coursework</a></li>
                <li><a href="#services" data-nav-section="services">Proud Me</a></li>
              </ul>
            </div>
          </nav>
          <div className="colorlib-footer">
            <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  </small></p>

          </div>
        </aside>
      </div>
    );
  }
}

// <ul>
//   <li><a href="#"><i className="icon-facebook2" /></a></li>
//   <li><a href="#"><i className="icon-twitter2" /></a></li>
//   <li><a href="#"><i className="icon-instagram" /></a></li>
//   <li><a href="https://www.linkedin.com/in/arnav-kasturia-981226170/"><i className="icon-linkedin2" /></a></li>
// </ul>
export default Sidebar;
