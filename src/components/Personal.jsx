import React from 'react';
import { projectList, myProject } from '../data';

const Personal = _ => (
  <div className="about">
    <h2>Привет!</h2>
    Меня зовут <span className="text-name">Рома Кузьменко.</span> Я front-end разработчик. Живу в
    Санкт-Петербурге. Работаю в &nbsp;Dostaевском. Пишу на JavaScript, нравится ReactJS и NodeJS.
    <br />
    <div>
      <h4 className="text-underline"> Проекты, в которых принял участие:</h4>
    </div>
    <div className="project-list">
      {projectList.map((item, index) => (
        <div className="btn">
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <span>{item.name}</span>
          </a>
        </div>
      ))}
    </div>
    <br />
    <p>
      <div>
        <h4 className="text-underline__mod"> Мои проекты: </h4>
      </div>

      <div className="project-list">
        {myProject.map((item, index) => (
          <div className="btn-my">
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="text">{item.name}</div>
            </a>
          </div>
        ))}
      </div>
    </p>
    <p>
      <h4 className="text-underline__net"> Соцсети: </h4>

      <br />
      <div className="project-list">
        <div className="btn-net">
          <a href="https://github.com/Kuzmrom7" target="_blank" rel="noopener noreferrer">
            <span className="text-net">
              Go for <i className="fab fa-github" />
            </span>
          </a>
        </div>
        <div className="btn-net">
          <a
            href="https://www.instagram.com/roma.kuzmenko"
            target="_blank"
            rel="noopener noreferrer">
            <span className="text-net">
              Follow me <i className="fab fa-instagram" />
            </span>
          </a>
        </div>

        <div className="btn-net">
          <a href="https://twitter.com/kuzmrom7" target="_blank" rel="noopener noreferrer">
            <span className="text-net">
              Twitter <i className="fab fa-twitter" />
            </span>
          </a>
        </div>
      </div>
    </p>
    <br />
    <p>
      <a target="_blank" rel="noopener noreferrer" href="https://t.me/RomanKuzmenko">
        <i className="fab fa-telegram" /> Спроси меня
      </a>
    </p>
  </div>
);

export default Personal;
