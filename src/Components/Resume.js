import React, { Component } from 'react';


class Resume extends Component {
  render() {
    if(this.props.data) {
      var education = this.props.data.education.map(function(edu){
        return <div key={edu.school} className="row item">
           <div className="twelve columns">
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
              <p>
                {edu.description}
              </p>
           </div>
        </div>
      });

      var work = this.props.data.work.map(function(job){
        return <div key={job.company} className="row item">
          <div className="twelve columns">
            <h3>{job.company}</h3>
            <p className="info">{job.title} <span>&bull;</span> <em className="date">{job.years}</em></p>
            <p>
              {job.description}
            </p>
          </div>
        </div>
      });

      var project = this.props.data.project.map(function(proj){
        return <div key={proj.type} className="row item">
          <div className="twelve columns">
            <h3>{proj.type}</h3>
            <p className="info"><a href={proj.link} target="_blank">{proj.link}</a></p>
            <p>
              {proj.description}
            </p>
          </div>
        </div>
      });

      var skills = this.props.data.skills.map(function(skill){
        var className = 'bar-expand '+skill.name.toLowerCase();
        return <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
      });
    }
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {education}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div key="Dearest.io" className="row item dearest">
              <div className="twelve columns">
                <h3><a className="work-link" href="https://www.dearest.io/" target="_blank">Dearest.io</a></h3>
                <p className="info">Lead Full Stack Web Developer <span>&bull;</span> <em className="date">January 2018 - Present</em></p>
                <p>
                  An online platform that connects families with personalized early childcare and classes, Dearest helps parents find the most suitable educators for their child. As the technical lead, I work closely with the founder to provide solutions and improve features of the site. My main responsibilities include keeping the front end public and admin site up to date while maintaining the backend server code and database. I also manage and mentor interns, as well as collarborate with an offshore development team to oversee and review projects.        
                </p>
              </div>
            </div>
            <div key="Taskrabbit" className="row item dearest">
              <div className="twelve columns">
                <h3><a className="work-link" href="https://www.taskrabbit.com/profile/trung-t" target="_blank">Taskrabbit</a></h3>
                <p className="info">Elite Tasker <span>&bull;</span> <em className="date">May 2016 - August 2017</em></p>
                <p>
                  As a tasker, I provided on-demand service to anyone that needs help with handyman work. This involves building furniture, moving and mounting. I completed over 140 tasks and maintained a 100% positive rating during my time working.
                </p>
              </div>
            </div>
            {work}
          </div>
        </div>
        <div className="row project">
          <div className="three columns header-col">
            <h1><span>Projects</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Webpage Mockups</h3>
                <p className="info"><a href="https://trungnt6669.github.io/excursion/" target="_blank">App Advert</a></p>
                <p className="info"><a href="https://trungnt6669.github.io/MyTimes/" target="_blank">Newspaper</a></p>
                <p className="info"><a href="https://trungnt6669.github.io/TeaCozy/" target="_blank">Company Page</a></p>
                <p>
                  I created these mockups to practice with style and layout. This current page itself is a work in progress, as I continue to learn new stacks, frameworks and libraries to utilize.
                </p>
              </div>
            </div>
            {project}
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div> <br />
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
