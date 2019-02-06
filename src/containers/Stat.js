import React, { Component } from 'react';
import Table from '../components/Table';
import axios from 'axios';

class Stat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: '',
      products: '',
      goods: '',
      used: '',
      rents: '',
      services: '',
      events: '',
      resumes: '',
      vacancies: '',
      realty: '',
    };
  }
  componentDidMount() {
    axios
      .get('https://futumarket.com:7000/companies?')
      .then(({ data }) => this.setState({ companies: data.total }));

    axios
      .get('https://futumarket.com:7000/products?')
      .then(({ data }) => this.setState({ products: data.total }));

    axios
      .get('https://futumarket.com:7000/goods?')
      .then(({ data }) => this.setState({ goods: data.total }));

    axios
      .get('https://futumarket.com:7000/used?')
      .then(({ data }) => this.setState({ used: data.total }));

    axios
      .get('https://futumarket.com:7000/rents?')
      .then(({ data }) => this.setState({ rents: data.total }));

    axios
      .get('https://futumarket.com:7000/services?')
      .then(({ data }) => this.setState({ services: data.total }));

    axios
      .get('https://futumarket.com:7000/events?')
      .then(({ data }) => this.setState({ events: data.total }));

    axios
      .get('https://futumarket.com:7000/resumes?')
      .then(({ data }) => this.setState({ resumes: data.total }));

    axios
      .get('https://futumarket.com:7000/vacancies?')
      .then(({ data }) => this.setState({ vacancies: data.total }));

    axios
      .get('https://futumarket.com:7000/realty?')
      .then(({ data }) => this.setState({ realty: data.total }));
  }
  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 class="title is-1">
            Количество КМ на{' '}
            <a className="" href="https://futumarket.com/companies" target="_blank">
              Футумаркете
            </a>
          </h1>
          <Table {...this.state} />
        </div>
      </div>
    );
  }
}

export default Stat;
