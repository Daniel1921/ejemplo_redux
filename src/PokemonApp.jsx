import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getPokemons(page));
  }, []);

  const changePage = () => {
    dispatch(getPokemons(page + 1));
  };

  return (
    <>
      <h1>Pokemon aplication</h1>
      <hr />
      <span>{isLoading && "Cargando..."}</span>
      <ul>
        {pokemons.map(({name}) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={changePage}>
        Next
      </button>
    </>
  );
};
