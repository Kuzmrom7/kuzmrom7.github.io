import React from 'react';

const Personal = _ => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="columns is-vcentered">
        <div className="column is-5">
          <img src="/400x540.jpg" alt="roman" />
        </div>
        <div className="column is-6 is-offset-1">
          <h2 className="subtitle is-4">
            Меня зовут Рома Кузьменко. Я front-end разработчик. Живу в Санкт-Петербурге. Работаю в{' '}
            <a
              href="https://futumarket.com"
              target="_blank"
              style={{ textDecoration: 'line-through' }}
              rel="noopener noreferrer">
              Футумаркете
            </a>
            . Пишу на JavaScript, нравится ReactJS и NodeJS.
          </h2>

          <p className="has-text-centered">
            Проекты, в которых принял участие: <br />
            <a
              className="button is-info is-inverted"
              href="https://futumarket.com/"
              target="_blank"
              rel="noopener noreferrer">
              <span>Futumarket</span>
            </a>
            <a
              className="button is-primary is-inverted"
              href="https://russia-trains.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer">
              <span>Trains</span>
            </a>
            <a
              className="button is-success is-inverted"
              href="https://aba-ava.com/"
              target="_blank"
              rel="noopener noreferrer">
              <span>ABA-AVA</span>
            </a>
            <a
              className="button is-link is-inverted"
              href="https://lastbackend.com/"
              target="_blank"
              rel="noopener noreferrer">
              <span>LastBackend</span>
            </a>
          </p>
          <br />
          <p className="has-text-centered">
            Соцсети:
            <br />
            <a
              className="button is-success is-inverted"
              href="https://github.com/Kuzmrom7"
              target="_blank"
              rel="noopener noreferrer">
              <span>Go for</span>
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="button is-danger is-inverted"
              href="https://www.instagram.com/roma.kuzmenko"
              target="_blank"
              rel="noopener noreferrer">
              <span>Follow me</span>
              <span className="icon">
                <i className="fab fa-instagram" />
              </span>
            </a>
          </p>

          <br />
          <p className="has-text-centered">
            <a
              className="button  is-info is-outlined is-large"
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/RomanKuzmenko">
              <i className="fab fa-telegram" /> &nbsp;Напиши мне
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Personal;
