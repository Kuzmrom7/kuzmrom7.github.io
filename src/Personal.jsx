import React from 'react';
import { projectList, myProject } from './data';

function Personal() {
  return (
    <div className="about">
      <span className="text-name">
        <h2>Рома Кузьменко. </h2>
      </span>
      <div className="description">
        <span className="text-name">Frontend-разработчик.</span> Живу в Санкт-Петербурге.
        Разрабатываю фронтенд в Semrush. Основной язык программирования -{' '}
        <span className="text-name">JavaScript,Typescript</span>.&nbsp;Умею создавать сложные
        веб-приложения, в основном использую <span className="text-name">React</span> на клиентской
        части, backend пишу на <span className="text-name">NodeJS</span>, немного знаю{' '}
        <span className="text-name">Go</span>.
      </div>
      <div className="flex-container">
        <div>
          <h4>Проекты, в которых принял участие:</h4>
          <ul>
            {projectList.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Мои проекты:</h4>
          <ul>
            {myProject.map((item, index) => (
              <li key={index} className="">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="text">{item.name}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Соцсети:</h4>
          <ul>
            <li>
              <a href="https://github.com/Kuzmrom7" target="_blank" rel="noopener noreferrer">
                Github <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/kuzmrom7" target="_blank" rel="noopener noreferrer">
                <span className="text-net">
                  Twitter <i className="fab fa-twitter" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/roma.kuzmenko"
                target="_blank"
                rel="noopener noreferrer">
                <span className="text-net">
                  Instagram <i className="fab fa-instagram" />
                </span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://teleg.run/RomanKuzmenko">
                <span className="text-net">
                  Telegram <i className="fab fa-telegram" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p></p>
      <div className="menu">
        <div className="text-cv">
          <a
            href="https://www.notion.so/romakuzmenko/0007445ce95f43ae8d89ac1db0609740"
            target="_blank"
            rel="noopener noreferrer">
            Посмотреть резюме
          </a>
        </div>
      </div>
    </div>
  );
}

export default Personal;
