import React, { Component } from 'react';
import './Projects.css';
import { connect } from 'react-redux';


class Projects extends Component {
  render() {
    const { projectsData } = this.props;
    const sortedProjects = projectsData.sort((a,b) => {return a.beneficiaries - b.beneficiaries})

    const projectCard = sortedProjects.map(project => {
      return (
        <div key={project.id} className="project-card-container">
            <h4 className="project-name">{project.name}</h4>
            <p className="project-beneficiaries">Beneficiaries: {project.beneficiaries}</p>
            <p className="project-budget">Budget: {project.budget}</p>
        </div>
      )
    })

    return (
      <div className="projects">
        {projectCard}
        <button onClick={this.props.startGettingProjects}>Show Projects</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projectsData: state.projectsData
})

export default connect(mapStateToProps, null)(Projects)
