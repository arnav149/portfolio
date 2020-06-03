import React from 'react';

class Experience extends React.Component
{
  render()
  {
    return(
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading animate-box">Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
              <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>CEO and Co-Founder: Visionary <span>July 2019-Present</span></h2>
                      <ul>
                        <li>Leading a team of 3 to create smart glasses prototype to aid the visually impaired</li>
                        <li>Enhancing entrepreneurial skills by gaining firsthand industry experience</li>
                        <li>Developed a website and business plan for the venture which was selected for Venture Devils program</li>
                      </ul>
                      </div>
                  </div>
              </article>
              <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-1">
                    <i className="icon-pen2" />
                  </div>
                  <div className="timeline-label">
                    <h2>Peer Career Coach: Engineering Career Center at ASU <span>Aug 2019-Present</span></h2>
                    <ul>
                      <li>Providing STEM students with professional development and job search techniques</li>
                      <li>Volunteering at career related events alongside having individual appointments</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-2">
                    <i className="icon-pen2" />
                  </div>
                  <div className="timeline-label">
                    <h2>Undergraduate Teaching Assistant: Ira A. Fulton Schools of Engineering <span>Aug 2019-Dec 2019</span></h2>
                    <ul>
                      <li>Mentored students and provided them with resources for a successful career</li>
                      <li>Communicated with students consistently to assist them with their doubts</li>
                    </ul>
                  </div>
                </div>
              </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Organizer: SunHacks 2019 <span>May 2019-September 2019</span></h2>
                      <ul>
                        <li>Collaborated in a team of 4 to decide prizes, team building activities, workshops and judging criteria</li>
                        <li>Handled communications with to-be present speakers at the hackathon with 400+ attendees</li>
                      </ul>
                      </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Web Development Intern: Blue Moon Technologies <span>June 2019-July 2019</span></h2>
                      <ul>
                        <li>Developed a website to market the client’s tutoring services using HTML, CSS, React and Bootstrap</li>
                        <li>Served as a direct point of contact for the client</li>
                        <li>Surpassed the expectations of the client by creating the website earlier than scheduled</li>
                      </ul>
                      </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-6">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Office Assistant: University Testing Services at ASU <span>Jan 2019-May 2019</span></h2>
                      <ul>
                        <li>Assisted 10+ students/faculty members on the day of work regarding testing and scanning related queries</li>
                        <li>Ensured students were given proper information when they come in for tests</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Experience;
