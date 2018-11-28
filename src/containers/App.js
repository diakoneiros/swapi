import React, { Component } from 'react';
import './App.css';
import MyNavbar from '../components/MyNavbar';
import ContentBox from '../components/ContentBox';
import Container from 'react-bootstrap/lib/Container'

class App extends Component {
  constructor() {
    super();
    this.state = {
      fields: ['placeholder'],
      entries: 'main',
      searchfield: '',
      entryKeys: [],
      entryValues: [],
      filteredEntries: []
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  fetchFields = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(values => Object.keys(values))
      .then(entries => this.setState({ fields: entries }))
  }


  async asyncFetchEntries(entryType) {
    let url = `https://swapi.co/api/${entryType.toLowerCase()}`;
    let tableOfEntries = [];
    this.setState({
      entryKeys: [],
      entryValues: []
    })
    while (url !== null) {
      const response = await fetch(url);
      const json = await response.json();
      json.results.map(
        entity => tableOfEntries.push(Object.values(entity)))

      url = json.next;
      if (this.state.entryKeys.length < 1) {
        this.setState({
          entryKeys: Object.keys(json.results[0])
        })
      };
      this.setState({
        entryValues: tableOfEntries
      })
    }
  }

  onButtonClick = (event) => {
    let btn = event.target;
    let lable = btn.innerText;
    if (lable !== this.state.entries) {

      if (this.state.entries !== 'main') {
        document.getElementsByClassName("btn-active")[0]
          .classList.remove("btn-active");
      }

      btn.classList.add("btn-active");

      this.setState({
        activeFieldIndex: btn.id,
        entries: lable
      })
      this.asyncFetchEntries(lable);
    }
  }

  componentDidMount() {
    this.fetchFields("https://swapi.co/api/");
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
      <div className="App" >
        <Container id="contentWrapper">
          <MyNavbar
            options={this.state.fields}
            onButtonClick={this.onButtonClick}
            onSearchChange={this.onSearchChange}
            activeTab={this.entry}
          />
          <ContentBox
            entry={this.state.entries}
            arrayOfEntries={
              this.filterEntries(this.state.searchfield)
            }
            labels={this.state.entryKeys}
          />
        </Container>
      </div>
    );
  }
}

export default App;
