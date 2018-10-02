import React, { Component } from 'react'

class AudioSelector extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onAudioSelectorChange(e.target.value);
    console.log(e.target.value);
  }
  render() {
    // const { scale } = this.props; // destructuring using {} === (instead of 2 lines) const temperature = this.props.temperature;
    return (
      <form action="#">
        <p className="range-field">
          <input type="range" min="Instumental Only" max="Normal" onChange={this.handleChange}/>
        </p>
      </form>
    );
  }
}
export default AudioSelector;
