import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CharacterCard from "./CharacterCard";
import { ContainerMonsters } from "../styles/character-list.styles";
import axios from "axios";
import "../i18n";

function CharacterList({ language = "en" }) {
	const [digimonList, setDigimonList] = useState([]);
    const [error, setError] = useState(null);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		if (language && i18n.language !== language) {
			i18n.changeLanguage(language);
		}
	}, [language, i18n]);

		useEffect(() => {
		const fetchDigimon = async () => {
			try {
				const res = await axios.get("https://digimon-api.vercel.app/api/digimon");
				const data = res.data.slice(0, 21);
				setDigimonList(data);
			} catch (error) {
				setError("error_loading_digimon");
				setDigimonList([]);
			}
		};

		fetchDigimon();
	}, []);

	if (error) {
		return <p>{t(error)}</p>;
	}

	return (
		<>
			<h1>Digimon</h1>
			<ContainerMonsters>
				{digimonList.map((d) => (
					<CharacterCard key={d.name} name={d.name} image={d.img} />
				))}
			</ContainerMonsters>
		</>
	);
}

export default CharacterList;
