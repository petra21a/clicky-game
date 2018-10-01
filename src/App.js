import React from "react";
import NavBar from "./components/NavBar";

import Themes from "./components/Themes";
import CardList from "./components/CardList";
import images from "./images.json";
import API from "./utils/API";

class App extends React.Component {
  state = {
    images: images,
    score: 0,
    topScore: 0,
    clicked: [],
    results: []
  };

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
  
    const { name, value } = event.target;
    console.log(name,value)

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
  event.preventDefault();
  this.searchGiphy(this.state.theme+"&limit="+this.state.limit);
console.log("form submited", this.state.theme,this.state.results)
}

  handleOnClick = id => {
    let score = this.state.score;
    const clicked = this.state.clicked;
    let topScore = this.state.topScore;
    if (clicked.includes(id)) {
      score = 0;
      clicked.splice(0);
      console.log("repeat - you lose", score, clicked);
    } else {
      clicked.push(id);
      score = score + 1;
      if (score > this.state.topScore) {
        console.log("new top score");
        topScore = score;
      }
    }
    const images = this.shuffle(this.state.images);
    this.setState({ images, clicked, score, topScore });
    console.log("image clicked", id);
    console.log("clicked list", clicked);
  };

  shuffle = array => {
    let i = array.length;
    while (i > 0) {
      let index = Math.floor(Math.random() * i);
      i -= 1;
      let temp = array[i];
      array[i] = array[index];
      array[index] = temp;
    }
    return array;
  };

  render() {
    return (
      <div>
        <NavBar score={this.state.score} topScore={this.state.topScore} />
        <Themes  search={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
        {this.state.images.length === this.state.clicked.length ? 
          <div className= "row"><p>You Won! Choose a theme for a new game </p>
          </div>:
          <CardList images = {this.state.images} handleOnClick = {this.handleOnClick} />
        }
 <ul className="list-group">
    {this.state.results.map(result => (
      <li className="list-group-item" key={result.id}>
        <img
          alt={result.title}
          className="img-fluid"
          src={result.images.original.url}
        />
      </li>
    ))}
  </ul>
      </div>
    );
  }
}

export default App;
