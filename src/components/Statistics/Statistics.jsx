import React from 'react';
// import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({ title, stats }) => (
    <section className={css.statistics}>
        <h2 className={css.title}>{ title }</h2>

 <ul className={css.list}>
      {stats.map(e => (
          <li className={css.item}
              style={{
              }}
              key={e.id}>
          <span className={css.label}>{e.label}</span>
          <span className={css.percentage}>{e.percentage}%</span>
        </li>
      ))}
    </ul>
        </section>
);


export default Statistics;