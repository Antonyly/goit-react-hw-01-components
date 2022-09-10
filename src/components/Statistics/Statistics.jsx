import React from 'react';
import propTypes from 'prop-types';
import css from './statistics.module.css';

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const  Statistics = ({ title, stats }) => (
    <section className={css.statistics}>
        <h2 className={css.title}>{ title }</h2>

 <ul className={css.list}>
      {stats.map(e => (
          <li className={css.item}
          style={{
            backgroundColor: randomColor(),
              }}
              key={e.id}>
          <span className={css.label}>{e.label}</span>
          <span className={css.percentage}>{e.percentage}%</span>
        </li>
      ))}
    </ul>
        </section>
);

Statistics.propTypes = {
    title: propTypes.string.isRequired,
    stats: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired,
        }),
    ),
};

export default Statistics;