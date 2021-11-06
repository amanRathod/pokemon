/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const ListView = ({ data }) => {
  const history = useHistory();

  const goToNextPage = async (name) => {
    history.push({
      pathname: ROUTES.DETAIL,
      state: { data: name }
    });
  };

  return (
    <>
      <p className=" text-3xl mt-2 dark:text-blue-two text-center">Favourite Pokemon</p>
      <div className="grid-list">
        {data &&
          data.map((item) => (
            <div key={item} className="grid-box">
              <img
                className="image"
                src={`https://img.pokemondb.net/artwork/large/${item}.jpg`}
                alt="loading..."
              />

              <div className=" max-w-full">
                <div className="dark:text-blue-two dark:text-opacity-80 text-gray-formbg text-center font-medium  mt-3">
                  {item}
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  className="readmore-button"
                  onClick={() => goToNextPage(item)}
                >
                  <span>Read more</span>
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default ListView;
