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
                  <figure className="image is-4by3">
                    <img
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=1350&q=80"
                      alt="Description"
                    />
                  </figure>
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
                      className="button is-success "
                      onClick={() => this.setState({ count: this.state.count + 1 })}>
                      &#x1F354; + {this.state.count === 0 ? 'покормить' : this.state.count}
                    </a>
                  </p>
                </div>
                {/*          <div className="columns is-vcentered">
                  <Card />
                </div>*/}
              </div>
            </div>
          </div>

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
          </div>
        </section>
      </div>
    );
  }
}

export default App;
