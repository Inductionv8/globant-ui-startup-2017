import React, { Component } from 'react';
import './InputSearch.css'

class InputSearch extends Component {
  render() {
    return (
      <div>
        <input className={this.props.inputSearch} type="text" id="inputSearch" placeholder="Search the name of your favorite artist">
        </input>
      </div>
    )
  }
}

InputSearch.defaultProps={
  inputSearch: "inputSearch-size",
}

export default InputSearch;
