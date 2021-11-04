import React from 'react';

// eslint-disable-next-line react/prop-types
const Search = ({ handleChange }) => (
  <div className="mx-auto max-w-screen-md">
    <div className="relative  w-64 sm:w-96 md:w-full">
      <svg
        className="absolute w-5 h-5 text-blue-300 top-3 left-3 opacity-70"
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
        className="w-full h-10 pr-4 text-sm font-semibold text-blue-700 placeholder-blue-500 bg-blue-50 rounded-lg pl-9 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60"
        placeholder="Search Pokemon"
        onChange={handleChange}
      />
    </div>
  </div>
);

export default Search;
