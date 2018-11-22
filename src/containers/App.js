import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import ContentBox from '../components/ContentBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fields: ['placeholder'],
      activeFieldIndex: 0,
      searchfield: ''
    }
  }

  fetchData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(values => Object.keys(values))
      .then(entries => this.setState({ fields: entries }))
    console.log("ComponentDidMount", this.state.fields)
  }

  onButtonClick = (event) => {
    document.getElementById(this.state.activeFieldIndex)
      .classList.remove("active")

    event.target.classList.add("active")

    this.setState({ activeFieldIndex: event.target.id })
  }

  componentDidMount() {
    this.fetchData("https://swapi.co/api/");
  }

  render() {
    return (
      <div className="App">
        <Navbar
          options={this.state.fields}
          onButtonClick={this.onButtonClick} />
        <ContentBox
          category={this.state.fields[this.state.activeFieldIndex]}
          searchTerm=""
        />
      </div>
    );
  }
}

export default App;
