import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setProjectsData } from '../../actions';
import { fetchProjects } from '../../apiCalls';
import Projects from '../projectsContainer/Projects';

class App extends Component {



  startGettingProjects = () => {
    fetchProjects().then(data => {
      this.props.hanldeFetchProjects(data)
    })
  }


  render() {
    

    return (
      <div className="app">
      <header>
        Projects Management
      </header>
      <main>
        <Projects startGettingProjects={this.startGettingProjects}/>
      </main>
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  hanldeFetchProjects: catsFactsData => dispatch(setProjectsData(catsFactsData))
})

export default connect(null, mapDispatchToProps)(App);
