import { Component } from "react";

export default class SearchForm extends Component {
  render() {
    return (
      <div>
        <form className="search-form">
          <label className="is-hidden" htmlFor="search">
            Search
          </label>
          <input placeholder="Search...."></input>
        </form>
      </div>
    );
  }
}
