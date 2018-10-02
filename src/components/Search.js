import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''}
  }
  handleChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search input-field active">
        <i className="material-icons prefix">search</i>
        <input id="searchVideo" type="text"
          value={this.state.term}
          onChange={event => this.handleChange(event.target.value)}/>
          <label htmlFor="searchVideo">Search videos</label>
      </div>
    )
  }
}
export default Search;
