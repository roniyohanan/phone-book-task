/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './search-bar.module.scss';

const SearchBar = ({ value, onChange }) => (
  <div className={styles.search}>
    <div className={styles.search__input}>
      <input
        placeholder="Search by Name"
        type="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
