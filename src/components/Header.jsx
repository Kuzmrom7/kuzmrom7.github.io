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
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample">
            <span />
            <span />
            <span />
          </a>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item">
              <Link to="/" className="navbar-item is-active">
                Home
              </Link>
              <a
                className="button is-success is-inverted"
                href="https://github.com/Kuzmrom7"
                target="_blank">
                <span>Go for</span>
                <span className="icon">
                  <i className="fa fa-github" />
                </span>
              </a>
            </span>
            <span className="navbar-item">
              <a
                className="button is-danger is-inverted"
                href="https://www.instagram.com/roma.kuzmenko"
                target="_blank">
                <span>Follow me</span>
                <span className="icon">
                  <i className="fab fa-instagram" />
                </span>
              </a>
            </span>

            <span className="navbar-item">
              <Link to="/ftm_stat" className="button is-info is-inverted">
                <span>Futumarket Statistics</span>
                <span className="icon">
                  <i class="far fa-chart-bar" />
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
