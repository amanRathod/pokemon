import React, { useEffect } from 'react';
import axios from 'axios';
import Search from '../../components/private/search';
import List from '../../pages/list';
import PokemonContext from '../../util/context/pokemon';

const Home = () => {
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [pokemon, setPokemon] = React.useState([]);

  const fetchData = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
    setData(response.data.results);
  };

  const getSearchData = async (search) => {
    const fileteredPokemons = data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setPokemon(fileteredPokemons);
  };

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    debounce(getSearchData(e.target.value), 300);
  };

  useEffect(() => {
    if (!search) {
      setPokemon([]);
      return fetchData();
    }
  }, [search]);

  return (
    <div className="bg-orange-50 h-screen">
      <PokemonContext.Provider value={{ data, pokemon, search }}>
        <Search handleChange={handleChange} />
        <List />
      </PokemonContext.Provider>
    </div>
  );
};
export default Home;
