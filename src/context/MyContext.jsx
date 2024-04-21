import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemon, setPokemon] = useState({});

  const getPokemonNames = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/generation/1");
    const { pokemon_species } = await response.json();
    const names = pokemon_species.map((element) => element.name);
    setPokemones(names);
  };

  useEffect(() => {
    getPokemonNames();
  }, []);

  return (
    <MyContext.Provider value={{ pokemones, setPokemones, pokemon, setPokemon }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;