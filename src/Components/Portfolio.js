import React, { Component } from 'react';


class Portfolio extends Component {
  render() {
    if(this.props.data) {
      var portfolio = this.props.data.projects.map(function(project) {
        var imageUrl = 'images/portfolio/'+project.image;
        return <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={project.modal} title="">
              <img alt="" src={imageUrl} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      });
    }
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {portfolio}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
