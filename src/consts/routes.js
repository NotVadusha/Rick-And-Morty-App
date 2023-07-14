import MainPage from "../pages/MainPage";
import CharacterPage from "../pages/CharacterPage";
import CharactersService from "../services/CharactersService";

const service = new CharactersService();

export const routes =
    [{
        path: "/",
        element: <MainPage data={(await service.getCharactersPage(1)).data.results}/>,
    },
        {
            path: "character/:characterId",
            loader: async (charId) => {
                return await service.getCharacter(charId.params.characterId);
            },
            element: <CharacterPage/>
        }
    ];

