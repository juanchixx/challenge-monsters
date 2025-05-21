import "./App.css";

import React, { useState, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { ButtonMonster } from "./styles/app.styles";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { t } from 'i18next'

const Pokemon = React.lazy(() => import("pokemon/CharacterList"));
const Digimon = React.lazy(() => import("digimon/CharacterList"));

function App() {
	const { t, i18n } = useTranslation();
	const [activeMF, setActiveMF] = useState(null);

	return (
		<>
			<div>
        <LanguageSwitcher />
				{ !activeMF && <>
          <h1>{t("title")}</h1>
          <h3>{t("pick_your_monsters")}</h3>
        </> }
				<ButtonMonster onClick={() => setActiveMF("POKEMON")}>
					{t("buttonPokemon")}
				</ButtonMonster>
				<ButtonMonster onClick={() => setActiveMF("DIGIMON")}>
					{t("buttonDigimon")}
				</ButtonMonster>

				<Suspense fallback={<div>{t('loading')}</div>}>
					{activeMF === "POKEMON" && (
						<>
							<Pokemon language={i18n.language} />
						</>
					)}
					{activeMF === "DIGIMON" && (
						<Digimon language={i18n.language} />
					)}
				</Suspense>
			</div>
		</>
	);
}

export default App;
