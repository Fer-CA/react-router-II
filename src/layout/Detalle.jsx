import { useParams, useNavigate } from "react-router-dom"
import React, { useContext, useEffect } from "react"
import { MyContext } from "../context/MyContext"

const Detalle = () => {
    const { name } = useParams();
    const { pokemon, setPokemon } = useContext(MyContext);
    const navigate = useNavigate();
  
    const goBack = () => {
      navigate("/pokemones");
    };
  
    const getPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
          throw new Error("No se pudo obtener el Pokémon");
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getPokemon();
    }, [name]);
  
    return (
        <div className="container-fluid">
          <div className="titulo">
            <h1>Detalle del Pokémon</h1>
          </div>
          <div className="card">
            <div className="image">
              <img src={pokemon?.sprites?.front_default} width={400} alt={pokemon?.name} />
            </div>
            <div className="cardBody">
              <h3>Nombre: {pokemon?.name}</h3>
              <p>HP: {pokemon?.stats?.find(stat => stat.stat.name === "hp")?.base_stat}</p>
              <p>Ataque: {pokemon?.stats?.find(stat => stat.stat.name === "attack")?.base_stat}</p>
              <p>Defensa: {pokemon?.stats?.find(stat => stat.stat.name === "defense")?.base_stat}</p>
              <p>Ataque Especial: {pokemon?.stats?.find(stat => stat.stat.name === "special-attack")?.base_stat}</p>
              <p>Defensa Especial: {pokemon?.stats?.find(stat => stat.stat.name === "special-defense")?.base_stat}</p>
              <p>Velocidad: {pokemon?.stats?.find(stat => stat.stat.name === "speed")?.base_stat}</p>
              <p>Tipo: {pokemon?.types?.map(type => type.type.name).join(", ")}</p>
              <button className="btn btn-warning" onClick={goBack}>Regresar</button>
            </div>
          </div>
        </div>
      );
      
  };
  
  export default Detalle;