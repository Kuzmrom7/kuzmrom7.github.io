import React from 'react';
import { Link } from 'react-router-dom';

const Personal = _ => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="columns is-vcentered">
        <div className="column is-5">
          <img src="/400x540.jpg" alt="Photo R.K." />
        </div>
        <div className="column is-6 is-offset-1">
          <h2 className="subtitle is-4">
            Меня зовут Рома Кузьменко. Я front-end разработчик. Живу в Санкт-Петербурге. Работаю в{' '}
            <a className="" href="https://futumarket.com" target="_blank">
              Футумаркете
            </a>
            . Пишу на JavaScript, нравится ReactJS и NodeJS.
          </h2>

          <p className="has-text-centered">
            <a
              className="button is-success is-inverted"
              href="https://github.com/Kuzmrom7"
              target="_blank">
              <span>Go for</span>
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="button is-danger is-inverted"
              href="https://www.instagram.com/roma.kuzmenko"
              target="_blank">
              <span>Follow me</span>
              <span className="icon">
                <i className="fab fa-instagram" />
              </span>
            </a>

            <Link to="/ftm_stat" className="button is-info is-inverted">
              <span>Futumarket Stat</span>
              <span className="icon">
                <i class="far fa-chart-bar" />
              </span>
            </Link>

            <a
              className="button is-primary is-inverted"
              href="https://russia-trains.herokuapp.com/"
              target="_blank">
              <span>Trains</span>
              <span className="icon">
                <i class="fas fa-train" />
              </span>
            </a>
          </p>
          <br />
          <p className="has-text-centered">
            <a
              className="button  is-info is-outlined is-large"
              target="_blank"
              href="https://russia-trains.herokuapp.com/">
              <i class="fab fa-train" /> &nbsp;Напиши мне
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Personal;
