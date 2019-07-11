import React from 'react';

const Card = () => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src="https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4 ">Frontend Джуниор</p>
          <p className="subtitle is-6 ">
            <strong>Мы запустили канал в Telegram</strong>
          </p>
        </div>
      </div>

      <div className="content">
        Frontend Джуниор - это канал, для новичков и старичков, которые возможно что-то забыли или
        упустили 👨‍💻
        <br />
        Аж три раза в неделю, в 10-00 по мск, мы публикуем 2-3 интересных поста из мира фронтенда ✅
        <br />
        Стартуем со среды 1.08.2018 🚀
      </div>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        <span>
          <a href="https://t.me/frontend_junior" target="_blank">
            Подписаться на канал Telegram
            <i className="fab fa-telegram" />
          </a>
        </span>
      </p>
    </footer>
  </div>
);

export default Card;
