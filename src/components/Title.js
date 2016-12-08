import React, { PropTypes } from 'react';

const Title = ({ catch_phrase, color }) => (
  <div className="Title" style={{backgroundColor: color}}>
    {catch_phrase}
  </div>
);

export default Title;
