import React, { Component } from "react";
import "./App.css";
import Gifs from "./components/Gifs";
import SearchForm from "./components/SearchForm";

class App extends Component {
constructor() {
  super();
  this.state = {
    gifs: []
  }
}
componentDidMount() {
  fetch("http://api.giphy.com/v1/gifs/trending?api_key=k2wbuloRNTvqpq7Ur2LWB6nebopeIb2F")
  .then((response)=>response.json())
  .then((data)=>console.log(data))
}

  render() {
    return (
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Search App</h1>
          <SearchForm />
        </div>
      <div className="main-content">
        <Gifs />
      </div>
      </div>
    );
  }
}

export default App;
