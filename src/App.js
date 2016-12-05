import React, { Component } from 'react';

// 'ref' for getting values from DOM
// uncontrolled element with 'ref' -> controlled one

// destructuring, pick 'currentValue' and 'resetTimer' from the 'props' object received
const Timer = ({currentValue, resetTimerHandler}) => {
  return (
    <div className="Timer" onClick={resetTimerHandler}>
      {currentValue}
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    // pass starting value to avoid uncontrolled/controlled input warning
    this.state = { startValue: '' };
  }

  startTimer = () => {
    this.setState({
      currentValue: Number(this.state.startValue)
    });

    setInterval(() => {
      this.setState({ currentValue: this.state.currentValue - 1 });
    }, 1000);
  }

  resetTimer = () => {
    this.setState({ currentValue: this.state.startValue });
  };

  handleInputChange = (ev) => {
    this.setState({ startValue: ev.target.value });
  };

  render() {
    return (
      <div className="App">
        <Timer
          currentValue={this.state.currentValue}
          resetTimerHandler={this.resetTimer} />
        <input
          type="text"
          value={this.state.startValue}
          onChange={this.handleInputChange} />
        <button onClick={this.startTimer}>Start</button>
      </div>
    );
  }
}

export default App;
