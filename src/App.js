import React, {Component} from 'react';
import {CardList} from "./components/cardlist/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state
    const filtered = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters..."
          handleChange={this.handleChange}
        />
        <CardList monsters={filtered}/>
      </div>
    );
  }
}

export default App;
