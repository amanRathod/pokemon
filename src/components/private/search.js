import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleChange }) => (
  <div className="mx-auto max-w-screen-md">
    <div className="relative mt-3 w-40 sm:w-64 md:w-96">
      <svg
        className="absolute w-5 h-5 top-3 left-3 opacity-70"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        className="search-input"
        placeholder="Search Pokemon"
        onChange={handleChange}
      />
    </div>
  </div>
);

export default Search;

Search.propTypes = {
  handleChange: PropTypes.func.isRequired
};
