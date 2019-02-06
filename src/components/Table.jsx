import React from 'react';

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
          <th>Недвижомостей</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{companies}</th>
          <th>{products}</th>
          <th>{goods}</th>
          <th>{rents}</th>
          <th>{used}</th>
          <th>{services}</th>
          <th>{events}</th>
          <th>{resumes}</th>
          <th>{vacancies}</th>
          <th>{realty}</th>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Table;
