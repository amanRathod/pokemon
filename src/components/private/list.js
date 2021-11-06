import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Proptypes from 'prop-types';
import { HeartIcon } from '@heroicons/react/solid';
import * as ROUTES from '../../constants/routes';
import { addFavourite } from '../../service/user';
import PokemonContext from '../../util/context/pokemon';

const ListView = ({ data }) => {
  const history = useHistory();
  const { favourite, setFavourite } = useContext(PokemonContext);

  const handleFavorite = async (name) => {
    try {
      if (!favourite.includes(name)) {
        setFavourite((oldArray) => [...oldArray, name]);
      } else {
        setFavourite((oldArray) => oldArray.filter((item) => item !== name));
      }
      await addFavourite(name);
    } catch (err) {
      console.log(err);
    }
  };

  const goToNextPage = async (name) => {
    history.push({
      pathname: ROUTES.DETAIL,
      state: { data: name }
    });
  };

  return (
    <>
      <div className="grid-list">
        {data &&
          data.map((item) => (
            <div key={item.name} className="grid-box">
              <img
                className="image"
                src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
                alt="loading..."
              />

              <div className=" max-w-full">
                <div className="dark:text-blue-two dark:text-opacity-80 text-gray-formbg text-center font-medium  mt-3">
                  {item.name}
                </div>
              </div>

              <div className="row justify-between gap-4 mt-5">
                <button type="button" onClick={() => handleFavorite(item.name)}>
                  <HeartIcon
                    className={`h-10 w-10 text-blue-two hover:text-red-primary
                  ${favourite.includes(item.name) && 'text-red-primary dark:text-red-primary'}
                `}
                  />
                </button>
                <button
                  type="button"
                  className="readmore-button"
                  onClick={() => goToNextPage(item.name)}
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

ListView.propTypes = {
  data: Proptypes.arrayOf(Proptypes.object).isRequired
};
