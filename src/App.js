import CardList from "./components/card-list/card-list.component";
import "./App.css";
import { Component } from "react";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: " ",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users#")
      .then((response) => response.json())
      .then((value) =>
        this.setState(() => {
          
          return { monsters: value, mainmonsters: value };
        })
      );
  }

  onSearchHandler = (event) => {
    const searchString = event.target.value.toLowerCase();

    this.setState(() => {
      return {
        searchString
      };
    });
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
     
      return monster.name.toLowerCase().includes(this.state.searchString);
    });
    return (
      <div className="App">
       <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onChangeHandler = {this.onSearchHandler} placeholder = "search monsters" className = "search-box"/>
        <CardList monster = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;



