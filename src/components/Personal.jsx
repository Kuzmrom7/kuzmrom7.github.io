import React from 'react';

const Personal = _ => (
  <div className="about">
    <h2>
      Меня зовут Рома Кузьменко. Я front-end разработчик. Живу в Санкт-Петербурге. Работаю в{' '}
      <a
        href="https://futumarket.com"
        target="_blank"
        style={{ textDecoration: 'line-through' }}
        rel="noopener noreferrer">
        Футумаркете
      </a>
      &nbsp;Dostaевском. Пишу на JavaScript, нравится ReactJS и NodeJS.
    </h2>

    <p className="has-text-centered">
      Проекты, в которых принял участие: <br />
      <a href="https://futumarket.com/" target="_blank" rel="noopener noreferrer">
        <span>Futumarket</span>
      </a>
      <a href="https://russia-trains.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <span>Trains</span>
      </a>
      <a href="https://aba-ava.com/" target="_blank" rel="noopener noreferrer">
        <span>ABA-AVA</span>
      </a>
      <a href="https://lastbackend.com/" target="_blank" rel="noopener noreferrer">
        <span>LastBackend</span>
      </a>
    </p>
    <br />
    <p>
      Соцсети:
      <br />
      <a href="https://github.com/Kuzmrom7" target="_blank" rel="noopener noreferrer">
        <span>Go for</span>
        <span>
          <i />
        </span>
      </a>
      <a href="https://www.instagram.com/roma.kuzmenko" target="_blank" rel="noopener noreferrer">
        <span>Follow me</span>
        <span>
          <i />
        </span>
      </a>
    </p>

    <br />
    <p>
      <a target="_blank" rel="noopener noreferrer" href="https://t.me/RomanKuzmenko">
        <i className="fab fa-telegram" /> &nbsp;Напиши мне
      </a>
    </p>
  </div>
);

export default Personal;
