import React from 'react';

class About extends React.Component
{
  render()
  {
    return(
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>An undergraduate CSE student at Arizona State University with exceptional academic standing. I have experience in full-stack development and I'm working as a Peer Career Coach at ASU. I like participating in hackathons as it gives me a very good opportunity to get practical knowledge, work as a team, come up with new ideas and take decisions when necessary. I see myself as a team player and a person people would really enjoy working with.</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
