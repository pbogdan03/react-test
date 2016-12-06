import React from 'react';

// destructuring, pick 'currentValue' and 'resetTimer' from the 'props' object received
const Timer = ({currentValue, resetTimerHandler}) => {
  return (
    <div className="TimerDisplay" onClick={resetTimerHandler}>
      {currentValue}
    </div>
  );
}

export default Timer;
