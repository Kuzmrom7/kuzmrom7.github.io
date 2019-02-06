import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Roman Kuzmenko &nbsp;
            <i className="fas fa-rocket" />
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
