import React from 'react';
import Spinner from './Spiner';

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
          <th className="has-text-primary	 is-size-2">{products === '' ? <Spinner /> : products}</th>
          <th className="has-text-primary	 is-size-2">{goods === '' ? <Spinner /> : goods}</th>
          <th className="has-text-primary	 is-size-2">{rents === '' ? <Spinner /> : rents}</th>
          <th className="has-text-primary	 is-size-2">{used === '' ? <Spinner /> : used}</th>
          <th className="has-text-primary	 is-size-2">{services === '' ? <Spinner /> : services}</th>
          <th className="has-text-primary	 is-size-2">{events === '' ? <Spinner /> : events}</th>
          <th className="has-text-primary	 is-size-2">{resumes === '' ? <Spinner /> : resumes}</th>
          <th className="has-text-primary	 is-size-2">
            {vacancies === '' ? <Spinner /> : vacancies}
          </th>
          <th className="has-text-primary	 is-size-2">{realty === '' ? <Spinner /> : realty}</th>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Table;
