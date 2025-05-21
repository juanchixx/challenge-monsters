import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import { ContainerMonsters } from "../styles/character-list.styles";
import "../i18n";

function CharacterList({ language = "en" }) {
	const [pokemonList, setPokemonList] = useState([]);
	const [error, setError] = useState(null);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		if (language && i18n.language !== language) {
			i18n.changeLanguage(language);
		}
	}, [language, i18n]);

	useEffect(() => {
		const fetchPokemon = async () => {
			try {
				const res = await axios.get(
					"https://pokeapi.co/api/v2/pokemon?limit=21"
				);
				const results = res.data.results;

				const data = await Promise.all(
					results.map(async (pokemon) => {
						const pokeDetails = await axios.get(pokemon.url);
						const id = pokeDetails.data.id;

						const characteristic = await axios.get(
							"https://pokeapi.co/api/v2/characteristic/" + id
						);
						const descriptionObj =
							characteristic.data.descriptions.find(
								(desc) => desc.language.name === language
							);

            const description = descriptionObj.description;

						return {
							name: pokemon.name,
							image: pokeDetails.data.sprites.other[
								"official-artwork"
							].front_default,
							description: description,
						};
					})
				);

				setPokemonList(data);
			} catch (error) {
				setError("error_loading_digimon");
				setPokemonList([]);
			}
		};

		fetchPokemon();
	}, [language]);

	if (error) {
		return <p>{t(error)}</p>;
	}
	return (
		<>
			<h1>Pokémon</h1>
			<ContainerMonsters>
				{pokemonList.map((p) => (
					<CharacterCard
						key={p.name}
						name={p.name}
						image={p.image}
						description={p.description}
					/>
				))}
			</ContainerMonsters>
		</>
	);
}

export default CharacterList;
