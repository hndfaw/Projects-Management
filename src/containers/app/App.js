import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setProjectsData } from '../../actions';
import { fetchCatsFacts } from '../../apiCalls';

class App extends Component {



  componentDidMount() {
    fetchCatsFacts().then(data => {
      this.props.handleCatsFacts(data)
    })
  }

  render() {

    return (
      <div className="app">
      <header>
        Projects Finder!
      </header>
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleCatsFacts: catsFactsData => dispatch(setProjectsData(catsFactsData))
})

export default connect(null, mapDispatchToProps)(App);
