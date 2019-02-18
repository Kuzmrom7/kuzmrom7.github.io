import React, { Component } from 'react';
import Table from '../components/Table';
import axios from 'axios';
import '../App.css';

const initialState = {
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
  diffCompanies: '',
  diffProducts: '',
  diffGoods: '',
  diffUsed: '',
  diffRents: '',
  diffServices: '',
  diffEvents: '',
  diffResumes: '',
  diffVacancies: '',
  diffRealty: '',
};

class Stat extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.loadData = this.loadData.bind(this);
    this.diffData = this.diffData.bind(this);
  }
  async componentDidMount() {
    try {
      await this.loadData();
      await localStorage.setItem('state', JSON.stringify(this.state));
      setInterval(this.loadData, 20000);
    } catch (e) {
      console.log('error', e);
    }
  }
  async loadData() {
    await this.setState(initialState);
    await axios
      .get('https://futumarket.com:7000/companies?')
      .then(({ data }) => this.setState({ companies: data.total }));

    await axios
      .get('https://futumarket.com:7000/products?')
      .then(({ data }) => this.setState({ products: data.total }));

    await axios
      .get('https://futumarket.com:7000/goods?')
      .then(({ data }) => this.setState({ goods: data.total }));

    await axios
      .get('https://futumarket.com:7000/used?')
      .then(({ data }) => this.setState({ used: data.total }));

    await axios
      .get('https://futumarket.com:7000/rents?')
      .then(({ data }) => this.setState({ rents: data.total }));

    await axios
      .get('https://futumarket.com:7000/services?')
      .then(({ data }) => this.setState({ services: data.total }));

    await axios
      .get('https://futumarket.com:7000/events?')
      .then(({ data }) => this.setState({ events: data.total }));

    await axios
      .get('https://futumarket.com:7000/resumes?')
      .then(({ data }) => this.setState({ resumes: data.total }));

    await axios
      .get('https://futumarket.com:7000/vacancies?')
      .then(({ data }) => this.setState({ vacancies: data.total }));

    await axios
      .get('https://futumarket.com:7000/realty?')
      .then(({ data }) => this.setState({ realty: data.total }));

    await this.diffData();
  }

  async diffData() {
    const storageState = JSON.parse(localStorage.getItem('state'));
    const diffCompanies = this.state.companies - storageState.companies,
      diffProducts = this.state.products - storageState.products,
      diffGoods = this.state.goods - storageState.goods,
      diffUsed = this.state.used - storageState.used,
      diffRents = this.state.rents - storageState.rents,
      diffServices = this.state.services - storageState.services,
      diffEvents = this.state.events - storageState.events,
      diffResumes = this.state.resumes - storageState.resumes,
      diffVacancies = this.state.vacancies - storageState.vacancies,
      diffRealty = this.state.realty - storageState.realty;

    if (diffCompanies > 0) {
      this.setState({ diffCompanies: diffCompanies });
    }

    if (diffProducts > 0) {
      this.setState({ diffProducts: diffProducts });
    }

    if (diffGoods > 0) {
      this.setState({ diffGoods: diffGoods });
    }

    if (diffUsed > 0) {
      this.setState({ diffUsed: diffUsed });
    }
    if (diffRents > 0) {
      this.setState({ diffRents: diffRents });
    }
    if (diffServices > 0) {
      this.setState({ diffServices: diffServices });
    }

    if (diffEvents > 0) {
      this.setState({ diffEvents: diffEvents });
    }

    if (diffResumes > 0) {
      this.setState({ diffResumes: diffResumes });
    }

    if (diffVacancies > 0) {
      this.setState({ diffVacancies: diffVacancies });
    }

    if (diffRealty > 0) {
      this.setState({ diffRealty: diffRealty });
    }
  }
  render() {
    return (
      <div className="hero-body flex">
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
