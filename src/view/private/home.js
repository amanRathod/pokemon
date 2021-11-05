import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as ROUTES from '../../constants/routes';
import { ListView } from '../../pages';
import { Header } from '../../components/private';
import PokemonContext from '../../util/context/pokemon';
import { GetUserData } from '../../service/user';
import { debounce } from '../../util/objects';

const styles = {
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100
};

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const history = useHistory();

  const fetchPokemonData = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200');
    setData(response.data.results);
  };

  const getSearchData = async (search) => {
    const fileteredPokemons = data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setPokemon(fileteredPokemons);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    debounce(getSearchData(e.target.value), 300);
  };

  const goToFavouritePage = (e) => {
    e.preventDefault();
    history.push({
      pathname: ROUTES.FAVOURITE,
      state: { data: favourite }
    });
  };

  const fetchUserData = async () => {
    try {
      const response = await GetUserData();
      setFavourite(response.data.favourite);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserData();
    if (!search) {
      setPokemon([]);
      return fetchPokemonData();
    }
  }, [search]);

  return (
    <div className="bg-gray-background h-full dark:bg-darkMode-base">
      <PokemonContext.Provider value={{ data, pokemon, favourite, search, setFavourite }}>
        <Header handleChange={handleChange} />
        <div
          className="btn text-center ml-9 sm:ml-16"
          style={styles}
          aria-hidden="true"
          onClick={goToFavouritePage}
        >
          <h1>Favourite Pokemon</h1>
        </div>
        <ListView />
      </PokemonContext.Provider>
      <div>Footer</div>
    </div>
  );
};
export default Home;
