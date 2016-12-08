import React, { Component, PropTypes } from 'react';

class Form extends Component {
  static propType = {
      handleAdd: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      nameVal: '',
      turnoverVal: ''
    }
  }

  handleNameChange = (ev) => {
    this.setState({
      nameVal: ev.target.value
    })
  };

  handleTurnoverChange = (ev) => {
    this.setState({
      turnoverVal: ev.target.value
    })
  };

  handleClick = (ev) => {
    ev.preventDefault();

    this.props.handleAdd( this.state.nameVal, this.state.turnoverVal );
    this.setState({
      nameVal: '',
      turnoverVal: ''
    });
  };

  render() {
    return (
      <form>
        <label className="form--name-label" htmlFor="business_name--input">Business Name</label>
        <input
          type="text"
          id="business_name--input"
          placeholder="Business name..."
          onChange={this.handleNameChange}
          value={this.state.nameVal}/>
        <label className="form--turnover-label" htmlFor="business_turnover--input">Turnover</label>
        <input
          type="text"
          id="business_turnover--input"
          placeholder="Turnover..."
          onChange={this.handleTurnoverChange}
          value={this.state.turnoverVal}/>
        <button onClick={this.handleClick}>Add Business</button>
      </form>
    );
  }
}

export default Form;
