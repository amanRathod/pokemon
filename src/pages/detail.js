import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/private';

const Detail = () => {
  const location = useLocation();
  const [name] = useState(location.state ? location.state.data : '');
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [pokemonAppreance, setPokemonAppreance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
      setPokemonDetail(pokemon.data);

      const pokemonAppreance = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon.data.id}`
      );
      setPokemonAppreance(pokemonAppreance.data);
    };
    fetchData();
  }, []);

  return (
    <div className=" h-screen overflow-x-hidden dark:bg-darkMode-base">
      <Header />
      <div className="col m-10">
        {pokemonAppreance.color && (
          <>
            <div className="flex flex-col sm:flex-row">
              <div>
                <img
                  className="image w-full h-80 mt-10"
                  src={`https://img.pokemondb.net/artwork/large/${pokemonDetail.name}.jpg`}
                  alt="loading..."
                />
              </div>
              <div className="col">
                <div className="text-color text-4xl mb-2">
                  <h1>{pokemonDetail.name}</h1>
                </div>

                <div className="card ">
                  <ul>
                    <li>
                      <strong>Height:&nbsp;&nbsp;</strong>
                      {pokemonDetail.height}
                    </li>
                    <li>
                      <strong>Weight:&nbsp;&nbsp;</strong>
                      {pokemonDetail.weight}
                    </li>
                    <li>
                      <strong>Base Experience:&nbsp;&nbsp;</strong>
                      {pokemonDetail.base_experience}
                    </li>
                  </ul>
                </div>
                <div className="card">
                  <div className="text-center">
                    <h2>Appearance</h2>
                  </div>
                  <ul>
                    <li>
                      <strong>Color</strong>: {pokemonAppreance.color.name}
                    </li>
                    <li>
                      <strong>Shape:&nbsp;&nbsp;</strong>
                      {pokemonAppreance.shape.name}
                    </li>
                    <li>
                      <strong>Capture_rate:&nbsp;&nbsp;</strong>
                      {pokemonAppreance.capture_rate}
                    </li>
                    <li>
                      <strong>Base happiness:&nbsp;&nbsp;</strong>
                      {pokemonAppreance.base_happiness}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="dark:bg-darkMode-primary mt-10 bg-blue-fifty text-blue-nine dark:text-blue-one hover:shadow-sm w-100 rounded-2xl shadow-lg sm:ml-10 md:p-8 p-2 mb-10">
              <div>
                <div className="text-center text-3xl">
                  <h1>Stats</h1>
                </div>
                <div className="relative pt-1">
                  {pokemonDetail.stats &&
                    pokemonDetail.stats.map((item) => (
                      <div className="flex flex-row justify-between m-2">
                        <div className="w-1/2">
                          <strong>
                            <p>{item.stat.name}: </p>
                          </strong>
                        </div>
                        <div className="w-1/">
                          <div className="ml-4 overflow-hidden flex-start h-5 w-60 mb-4 text-xs flex rounded bg-blue-two">
                            <div
                              style={{ width: `${item.base_stat}%` }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-medium"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
