import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  console.log('detail pagegege');
  const location = useLocation();
  const [name] = useState(location.state ? location.state.data : '');
  const [pokemonDetail, setPokemonDetail] = useState([]);

  console.log('pokemon Details', pokemonDetail);

  const fetchData = async () => {
    const result = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemonDetail(result.data);
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <div className="mx-auto max-w-screen-md">
      <h1>Detail Deatil</h1>
    </div>
  );
};

export default Detail;
