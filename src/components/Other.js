import React from 'react';

class Other extends React.Component
{
  render()
  {
    return(
      <section className="colorlib-services" data-section="services">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading">Here are some things I'm proud of</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
              <span className="icon">
                <i className="icon-bulb" />
              </span>
                <div className="desc">
                  <p>New American University Scholarship($10k/year)</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <p>Member of SoDA and Mobile Devs club at ASU</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <p>Udemy certified web developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <p>Cumulative GPA 4.0/4.0 and Dean's List x 4</p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <p>Udemy iOS App Development(ongoing)</p>
                </div>
              </div>
            </div> */}
            <div className="col-md-4 text-center animate-box">
              <div className="services color-6">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <p>Team finished third at cricket intramurals held at ASU</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Other;
