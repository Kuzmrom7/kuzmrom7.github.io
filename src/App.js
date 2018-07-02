import React, { Component } from 'react';



class App extends Component {
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
                        href="https://www.instagram.com/kuzmenko.rk/"
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
                  <h1 className="title is-2">Hello everyone!</h1>
                  <h2 className="subtitle is-4">
                    My name is Roman Kuzmenko. I'm web-developer. You can see my projects on{' '}
                    <a className="" href="https://github.com/Kuzmrom7" target="_blank">
                      <span>GitHub</span>
                      <span className="icon">
                        <i className="fa fa-github" />
                      </span>
                    </a>. Soon I will publish me notes about React  on{' '}
                    <a className="" href="https://medium.com/@roma.kuzmenko21" target="_blank">
                      <span>Medium</span>
                      <span className="icon">
                        <i className="fab fa-medium" />
                      </span>
                    </a>
                  </h2>
                  <br />
                  <p className="has-text-centered">
                    <a className="button is-success ">&#x1F354;</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*          <div className="hero-foot">
            <div className="container">
              <div className="tabs is-centered">
                <ul>
                  <li>
                    <a>And this is the bottom</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>*/}
        </section>
      </div>
    );
  }
}

export default App;
