import React from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';

const App = ({main}) => {
  return (
    <div className="App">
      <Nav />
      {main}
      <Footer />
    </div>
  );
}

export default App;
