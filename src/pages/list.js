/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import PokemonContext from '../util/context/pokemon';
import { ListView } from '../components/private';

const List = () => {
  const { data, pokemon, search } = useContext(PokemonContext);
  console.log(data);

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
