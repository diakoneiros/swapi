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
      searchfield: '',
      entryKeys: [],
      entryValues: [],
      filteredEntries: []
    }
  }

  fetchData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(values => Object.keys(values))
      .then(entries => this.setState({ fields: entries }))


  }

  fetchEntries = (entryType) => {
    fetch(`https://swapi.co/api/${entryType}`)
      .then(response => response.json())
      .then(values => {
        let tableOfEntries = [];
        let keys = Object.keys(values.results[0])
        values.results.map(val => tableOfEntries.push(Object.values(val)));
        this.setState({
          entryKeys: keys,
          entryValues: tableOfEntries
        })
      })
  }


  onButtonClick = (event) => {
    if (event.target.innerText === `${this.state.fields[this.state.activeFieldIndex]}`) console.log("Hi")
    document.getElementById(this.state.activeFieldIndex)
      .classList.remove("active")

    event.target.classList.add("active")

    let label = event.target.innerText;

    this.setState({
      activeFieldIndex: event.target.id,
      entries: label
    })

    this.fetchEntries(label)

  }

  componentDidMount() {
    this.fetchData("https://swapi.co/api/");
  }

  filterEntries = (query) => {
    return this.state.entryValues
      // eslint-disable-next-line
      .filter(entity => {
        for (const property of entity) {
          return property.toString().toLowerCase()
            .includes(query.toLowerCase());
        }
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar
          options={this.state.fields}
          onButtonClick={this.onButtonClick} />
        <ContentBox
          arrayOfEntries={
            this.filterEntries(this.state.searchfield)
          }
          labels={this.state.entryKeys}
        />
      </div>
    );
  }
}

export default App;
