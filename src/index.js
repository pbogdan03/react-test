import React from 'react';
import ReactDOM from 'react-dom';

// because of 'data' in the .json
import {data}  from './data';

import Timer from './components/Timer';
import BusinessList from './components/BusinessList';

ReactDOM.render(
  <Timer />,
  document.getElementById('rt-timer')
);

ReactDOM.render(
  <BusinessList businesses={data.business} />,
  document.getElementById('rt-catch-phrases')
);
