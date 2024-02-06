import { useEffect, useState } from "react";
console.log("hola");
export default function PokemonCard(props) {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
      });
  }, []);
  return (
    <article className="bg-stone-800 p-6 flex flex-col gap-4 w-auto rounded-md">
      {!pokemon && "Cargando..."}
      {pokemon && (
        <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
      )}
      <p className="text-white font-semibold text-lg text-center">
        {pokemon.name}
      </p>
    </article>
  );
}
