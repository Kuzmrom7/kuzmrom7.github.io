import React, { Fragment } from 'react';
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
  diffCompanies,
  diffProducts,
  diffGoods,
  diffUsed,
  diffRents,
  diffServices,
  diffEvents,
  diffResumes,
  diffVacancies,
  diffRealty,
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
            {companies === '' ? (
              <Spinner />
            ) : (
              <Fragment>
                {companies} {!!diffCompanies && <p className={'text-red'}>+{diffCompanies}</p>}
              </Fragment>
            )}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {products === '' ? (
              <Spinner />
            ) : (
              <Fragment>
                {products} {!!diffProducts && <p className={'text-red'}>+{diffProducts}</p>}
              </Fragment>
            )}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {goods === '' ? (
              <Spinner />
            ) : (
              <Fragment>
                {goods} {!!diffGoods && <p className={'text-red'}>+{diffGoods}</p>}
              </Fragment>
            )}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {rents === '' ? (
              <Spinner />
            ) : (
              <Fragment>
                {rents} {!!diffRents && <p className={'text-red'}>+{diffRents}</p>}
              </Fragment>
            )}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {used === '' ? (
              <Spinner />
            ) : (
              <Fragment>
                {used} {!!diffUsed && <p className={'text-red'}>+{diffUsed}</p>}
              </Fragment>
            )}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {services === '' ? (
              <Spinner />
            ) : (
              <Fragment>
                {services} {!!diffServices && <p className={'text-red'}>+{diffServices}</p>}
              </Fragment>
            )}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {events === '' ? (
              <Spinner />
            ) : (
              <Fragment>
                {events} {!!diffEvents && <p className={'text-red'}>+{diffEvents}</p>}
              </Fragment>
            )}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {resumes === '' ? (
              <Spinner />
            ) : (
              <Fragment>
                {resumes} {!!diffResumes && <p className={'text-red'}>+{diffResumes}</p>}
              </Fragment>
            )}
          </th>
          <th className="has-text-primary	 is-size-2 content-centered">
            {vacancies === '' ? (
              <Spinner />
            ) : (
              <Fragment>
                {vacancies} {!!diffVacancies && <p className={'text-red'}>+{diffVacancies}</p>}
              </Fragment>
            )}
          </th>
          <th className="has-text-primary	 is-size-2  content-centered">
            {realty === '' ? (
              <Spinner />
            ) : (
              <Fragment>
                {realty} {!!diffRealty && <p className={'text-red'}>+{diffRealty}</p>}
              </Fragment>
            )}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Table;
