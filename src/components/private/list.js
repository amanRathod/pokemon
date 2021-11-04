/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const ListView = ({ data }) => {
  const history = useHistory();

  const goToNextPage = (name) => {
    console.log('name naem', name);
    history.push({
      pathname: ROUTES.DETAIL,
      state: { data: name }
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 m-8">
      {data &&
        data.map((item) => (
          <div
            key={item.name}
            className="dark:bg-darkMode-primary dark:text-white  dark:text-opacity-70 hover:shadow-sm w-80 rounded-2xl shadow-lg sm:ml-10 md:p-8 p-2 bg-white mb-10"
          >
            <img
              className="w-full rounded-xl "
              src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
              alt="loading..."
            />

            <div className=" max-w-full">
              <div className="dark:text-white dark:text-opacity-80 text-gray-formbg text-center font-medium  mt-1">
                {item.name}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 mt-5">
              <button
                type="button"
                className=" dark:hover:text-darkMode-base flex items-center gap-1 h-10 border border-orange-base px-3  rounded-full hover:text-pink-200 transition-colors focus:bg-orange-secondary focus:outline-none focus-visible:border-orange-secondary"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  className="w-6 h-6 hover:bg-pink-600 "
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                </svg>
              </button>
              <button
                type="button"
                className="hover-bg  dark:hover:text-darkMode-base ml-auto flex items-center gap-1 h-15 border border-orange-base px-3  rounded-xl hover:text-white transition-colors focus:bg-orange-secondary focus:outline-none focus-visible:border-orange-secondary"
                onClick={() => goToNextPage(item.name)}
              >
                <span>Read more</span>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ListView;
