import React, { useState } from 'react';
import { projectList, myProject } from '../data';

function Personal() {
  const [showProjects, setShowProjects] = useState(false);
  const [animation] = useState('slideInLeft');

  const handleClick = e => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="about">
      <span className="text-name">
        <h2>✌🏻 Я Рома Кузьменко. </h2>
      </span>
      <br />Я Frontend-разработчик. Живу в Санкт-Петербурге. Работаю в &nbsp;Dostaевском. Основной
      язык программирования - <span className="text-name">JavaScript</span>.&nbsp; В основном
      использую <span className="text-name">React</span>, пишу backend на{' '}
      <span className="text-name">NodeJS</span>.
      <div className="menu">
        <div className="text-cv">
          <a
            href="https://www.notion.so/romakuzmenko/0007445ce95f43ae8d89ac1db0609740"
            target="_blank"
            rel="noopener noreferrer">
            Посмотреть резюме
          </a>
        </div>
        <div className="text-cv" onClick={handleClick}>
          Посмотреть проекты
        </div>
      </div>
      <br />
      {showProjects && (
        <div className={animation}>
          <div>
            <h4>Проекты, в которых принял участие</h4>
          </div>
          <div className="project-list">
            {projectList.map((item, index) => (
              <div key={index} className="btn">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <span>{item.name}</span>
                </a>
              </div>
            ))}
          </div>
          <br />
          <div>
            <h4>Мои проекты</h4>
          </div>
          <div className="project-list">
            {myProject.map((item, index) => (
              <div key={index} className="btn-my">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="text">{item.name}</div>
                </a>
              </div>
            ))}
          </div>
          <p>
            <h4>Соцсети</h4>

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
        </div>
      )}
      <p>
        <a target="_blank" rel="noopener noreferrer" href="https://teleg.run/RomanKuzmenko">
          <i className="fab fa-telegram" /> Спроси меня
        </a>
      </p>
    </div>
  );
}

export default Personal;
