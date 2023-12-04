import { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://www.narutodb.xyz/api/akatsuki')
      .then((response) => response.json())
      .then((user) =>
        this.setState(() => {
          return { monsters: user.akatsuki };
        })
      );
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    const filteredArray = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <h1 className="heading">AKATSUKI MEMBERS</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          className="search-box"
          placeholder="search-monster"
        />
        <CardList members={filteredArray} />
      </div>
    );
  }
}

export default App;
