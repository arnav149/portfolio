import React from 'react';

class Home extends React.Component
{
  render()
  {
    return(
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
              <div className="flexslider js-fullheight">
                <ul className="slides">
                  <li style={{backgroundImage: 'url(images/img1.jpg)'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                          <div className="slider-text-inner js-fullheight">
                            <div className="desc">
                              <h1>Hi! <br />I'm Arnav</h1>
                              <h2>A computer programmer and certified web developer</h2>
                              <p><a href="images/KasturiaArnav_Resume.pdf" className="btn btn-primary btn-learn" download>Download Resume <i className="icon-download4" /></a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li style={{backgroundImage: 'url(images/img1.jpg)'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                          <div className="slider-text-inner">
                            <div className="desc">
                              <h1>I'm a<br />Hard worker!</h1>
                              <h2>With confidence and ability to work in a collaborative and energetic team environment</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
    );
  }
}

export default Home;
