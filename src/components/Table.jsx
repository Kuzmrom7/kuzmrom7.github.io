import React from 'react';
import Spinner from './Spiner';
import '../App.css';

const Table = ({
  companies,
  products,
  goods,
  rents,
  used,
  services,
  events,
  resumes,
  vacancies,
  realty,
}) => (
  <div>
    <table class="table table is-bordered">
      <thead>
        <tr>
          <th>Компаний</th>
          <th>Продуктов</th>
          <th>Товаров</th>
          <th>Прокатных</th>
          <th>Поддержанных</th>
          <th>Услуг</th>
          <th>Событий</th>
          <th>Резюме</th>
          <th>Вакансий</th>
          <th>Недвижимостей</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="has-text-primary	 is-size-2">
            {companies === '' ? <Spinner /> : companies}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {products === '' ? <Spinner /> : products}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {goods === '' ? <Spinner /> : goods}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {rents === '' ? <Spinner /> : rents}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {used === '' ? <Spinner /> : used}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {services === '' ? <Spinner /> : services}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {events === '' ? <Spinner /> : events}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {resumes === '' ? <Spinner /> : resumes}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {vacancies === '' ? <Spinner /> : vacancies}
          </th>
          <th className="has-text-primary	 is-size-2  content-centered">
            {realty === '' ? <Spinner /> : realty}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Table;
