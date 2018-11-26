import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import ContentBox from '../components/ContentBox';
import SearchBox from '../components/SearchBox';

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

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
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
          if (property.toString().toLowerCase()
            .includes(query.toLowerCase())) return true;
        }
        return false;
      })
  }

  render() {
    return (
      <div className="App">
        <SearchBox
          searchchange={this.onSearchChange}
          activeTab={this.state.fields[this.state.activeFieldIndex]}
        />
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
