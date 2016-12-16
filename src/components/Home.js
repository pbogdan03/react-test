import React from 'react';

import Timer from './Timer';
import BusinessList from './BusinessList';

const Home = () => {
  return (
    <div className="main Home">
      <Timer />
      <BusinessList />
    </div>
  );
};

export default Home;
