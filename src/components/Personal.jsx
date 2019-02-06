import React from 'react';

const Personal = _ => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="columns is-vcentered">
        <div className="column is-5">
          <img src="/400x540.jpg" alt="Photo R.K." />
        </div>
        <div className="column is-6 is-offset-1">
          <h2 className="subtitle is-4">
            Меня зовут Рома Кузьменко. Я front-end developer. Живу в Санкт-Петербурге. Работаю в{' '}
            <a className="" href="https://futumarket.com" target="_blank">
              Футумаркете
            </a>
            . Ты можешь посмотреть мои проекты на &nbsp;
            <a className="" href="https://github.com/Kuzmrom7" target="_blank">
              <span>GitHub</span>
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            . Пишу на JavaScript, нравится ReactJS и NodeJS.
          </h2>
          <br />
          <p className="has-text-centered">
            <a
              className="button  is-info is-outlined is-large"
              target="_blank"
              href="https://t.me/RomanKuzmenko">
              <i class="fab fa-telegram" /> &nbsp;Напиши мне
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Personal;
