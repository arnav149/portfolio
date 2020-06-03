import React from 'react';

class Coursework extends React.Component
{
  render()
  {
    return(
      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading animate-box">Relevant Coursework</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Taken
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        <div className="row">
                        <ul>
                          <li>Introduction to Programming with Java</li>
                          <li>Object Oriented Programming and Data Structures</li>
                          <li>Digital Design Fundamentals</li>
                          <li>Programming for Computer Engineering</li>
                          <li>Computer Organization and Assembly Language Programming</li>
                          <li>Discrete Mathematical Structures</li>
                          <li>Calculus I, II and III</li>
                          <li>Data Structures and Algorithms</li>
                          <li>Design and Synthesis of Digital Hardware</li>
                          <li>Circuits I</li>
                          <li>Probability and Statistics for Engineering Problem Solving</li>
                          <li>Modern Differential Equations</li>
                        </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Fall 2020
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                        <ul>
                          <li>Embedded Microprocessor System</li>
                          <li>Operating Systems</li>
                          <li>Introduction to Software Engineering</li>
                          <li>Circuits II</li>
                          <li>Linear Algebra</li>
                        </ul>
                      </div>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                      <div className="panel-body">
                        <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      </div>
                    </div>
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

export default Coursework;
