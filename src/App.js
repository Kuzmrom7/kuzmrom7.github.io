import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="App">
        <section className="hero is-fullheight is-default is-bold">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    Roman Kuzmenko &nbsp;
                    <i className="fas fa-rocket" />
                  </a>
                  <span className="navbar-burger burger" data-target="navbarMenu">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHeroC" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <span className="navbar-item">
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
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns is-vcentered">
                <div className="column is-5">
                  <img
                    src="http://beta.futumarket.ru:9000/read-only/images/0176204d-5c17-457c-bc4b-ca8dfdbe7dd3/400x540.jpg"
                    alt="Description"
                  />
                </div>
                <div className="column is-6 is-offset-1">
                  <h1 className="title is-2">
                    Хэй! {this.state.count >= 5 ? 'Отлично! 🍕' : null}{' '}
                  </h1>
                  <h2 className="subtitle is-4">
                    Меня зовут Рома Кузьменко. Я веб-разработчик. Ты можешь посмотреть мои проекты
                    на {''}
                    <a className="" href="https://github.com/Kuzmrom7" target="_blank">
                      <span>GitHub</span>
                      <span className="icon">
                        <i className="fa fa-github" />
                      </span>
                    </a>
                    {/*. Soon I will publish me notes about React on{' '}
                    <a className="" href="https://medium.com/@roma.kuzmenko21" target="_blank">
                      <span>Medium</span>
                      <span className="icon">
                        <i className="fab fa-medium" />
                      </span>
                    </a>*/}
                  </h2>
                  <br />
                  <p className="has-text-centered">
                    <a
                      className="button is-success"
                      target="_blank"
                      href="https://t.me/RomanKuzmenko">
                      &#x1F354; Написать мне
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*
          <div className="container has-text-centered">
            <section className="hero is-light is-medium">
              <h1 className="title" style={{ marginTop: '5px' }}>
                Записи
              </h1>
              <div className="hero-body ">
                <div className="columns is-vcentered">
                  <section className="section">
                    <div className="container">
                      <div className="columns">
                        <div className="column">
                          <a name="posts" />
                          <Card />
                        </div>
                        <div className="column" />
                        <div className="column" />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>*/}
        </section>
      </div>
    );
  }
}

export default App;
