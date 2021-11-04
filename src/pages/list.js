/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import PokemonContext from '../util/context/pokemon';
import ListView from '../components/private/list';

const List = () => {
  const { data, pokemon, search } = useContext(PokemonContext);
  console.log('datatat', data);
  console.log('pokemon', pokemon);

  return (
  <div>
    {!search ? (
      <ListView data={data} />
    ) : (
      <ListView data={pokemon} />
    )}
  </div>
  )
};
export default List;
