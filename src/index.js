import React from 'react';
import ReactDOM from 'react-dom';

import Timer from './components/Timer';
import BusinessList from './components/BusinessList';

ReactDOM.render(
  <Timer />,
  document.getElementById('rt-timer')
);

ReactDOM.render(
  <BusinessList />,
  document.getElementById('rt-catch-phrases')
);
