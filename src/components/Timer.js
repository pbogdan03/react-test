import React, { Component } from 'react';
import TimerDisplay from './TimerDisplay';

// 'ref' for getting values from DOM
// uncontrolled element with 'ref' -> controlled one
class Timer extends Component {
  constructor(props) {
    super(props);

    // pass starting value to avoid uncontrolled/controlled input warning
    this.state = { startValue: '' };
  }

  startTimer = () => {
    this.setState({
      currentValue: Number(this.state.startValue)
    });

    if(this.state.timerInterval) clearInterval(this.state.timerInterval);

    let timerInterval = setInterval(() => {
      this.setState({ currentValue: this.state.currentValue - 1 });
    }, 1000);

    this.setState({ timerInterval });
  }

  resetTimer = () => {
    this.setState({ currentValue: this.state.startValue });
    clearInterval(this.state.timerInterval);
  };

  handleInputChange = (ev) => {
    this.setState({ startValue: ev.target.value });
  };

  render() {
    return (
      <div className="Timer">
        <h2>Timer</h2>
        <TimerDisplay
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

export default Timer;
