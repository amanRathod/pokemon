/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/solid';
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
            className="dark:bg-darkMode-primary bg-blue-fifty dark:text-blue-two  dark:text-opacity-70 hover:shadow-sm w-80 rounded-2xl shadow-lg sm:ml-10 md:p-8 p-2 mb-10"
          >
            <img
              className="w-full min-h-32 rounded-xl bg-blue-one dark:bg-gray-base"
              src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
              alt="loading..."
            />

            <div className=" max-w-full">
              <div className="dark:text-blue-two dark:text-opacity-80 text-gray-formbg text-center font-medium  mt-3">
                {item.name}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 mt-5">
              <button type="button" className=" d">
                <HeartIcon className="h-10 w-10 text-blue-two hover:text-red-primary border-blue-nine dark:text-blue-seven" />
              </button>
              <button
                type="button"
                className="hover-bg  dark:hover:text-darkMode-base ml-auto flex items-center gap-1 h-15 border border-blue-base px-3  rounded-xl hover:text-blue-nine hover:bg-blue-fifty transition-colors focus:bg-blue-secondary focus:outline-none focus-visible:border-blue-secondary"
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
