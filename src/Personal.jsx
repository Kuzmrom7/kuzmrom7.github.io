import React from 'react';
import data from './data';

import './style.css';

function Personal() {
  return (
    <div className="wrap">
      <div className="about">
        <span className="title">
          <h2>{data.title}</h2>
        </span>
        <div className="description">{data.description}</div>
        <div className="container">
          <div className="container-item">
            <h4>Проекты, на работе:</h4>
            <ul>
              {data.jobList.map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="container-item">
            <h4>Мои проекты:</h4>
            <ul>
              {data.projectList.map((item, index) => (
                <li key={index} className="">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <span className="text">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="container-item">
            <h4>Соцсети:</h4>
            <ul>
              {data.socialList.map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <span className="text-net">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
    </div>
  );
}

export default Personal;
