import React, { Component } from 'react';
import './Projects.css';
import { connect } from 'react-redux';


class Projects extends Component {
  state = {
    filterTerm: ''
  }

  handleChangeFilter = e => {
    this.setState({filterTerm: e.target.value})
  }

  render() {
    const { projectsData } = this.props;
    const { filterTerm } = this.state
    const sortedProjects = projectsData.sort((a,b) => {return a.beneficiaries - b.beneficiaries})

    const filterProjects = sortedProjects.filter(project => project.name.includes(filterTerm.toLowerCase()) || project.name.includes(filterTerm.toUpperCase()))

    const projectCard = filterProjects.map(project => {
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
        <p className="projects-description">Project Management helps your organization to manage and track all your projects more efficiently!</p>
        <div className="projects-instructions">
          <h5 className="projects-instructions-title">How to use:</h5>
          <ol className="projects-instructions-ol">
            <li>Click on the "Show Projects" button to show all your projects.</li>
            <li>Filter your projects by name, once you have clicked on the "Show Projects" now you can search for your project using the search bar.</li>
          </ol>
        </div>

        <button onClick={this.props.startGettingProjects} className="show-projects-btn">Show Projects</button>
        <input type="text" onChange={this.handleChangeFilter} className="search-input" placeholder="Find Projects..."/>
        <div className="projects-main-container">
          {projectCard}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projectsData: state.projectsData
})

export default connect(mapStateToProps, null)(Projects)
