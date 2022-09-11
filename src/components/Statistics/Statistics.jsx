import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css';


function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
<ul className={css.list}>
    {stats.map(el => (
        <li className={css.item}
          style={{
            backgroundColor: randomColor(),
          }}
          key={el.id}>
        <label className={css.label}>{el.label}</label>
          <span className={css.percentage}>{el.percentage}%</span>
        </li>
    ))}
</ul>
  </section>
)

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};


export default Statistics;