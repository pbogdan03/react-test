import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">React apps examples</Link></li>
        <li><Link to="/register">Register example</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
