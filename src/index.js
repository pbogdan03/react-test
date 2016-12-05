import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';

console.log(data);

import apps from './App';
const TimerApp = apps.TimerApp

ReactDOM.render(
  <TimerApp />,
  document.getElementById('rt-timer')
);
