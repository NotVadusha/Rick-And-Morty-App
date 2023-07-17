import MainPage from "../pages/MainPage";
import CharacterPage from "../pages/CharacterPage";
import {service} from "../services/CharactersService";
import {createBrowserRouter} from "react-router-dom";

export const routes =
    createBrowserRouter(
        [
            {
                path: "/",
                element: <MainPage/>,
            },
            {
                path: "/character/:characterId",
                loader: async (charId) => {
                    return await service.getCharacter(charId.params.characterId);
                },
                element: <CharacterPage/>
            }
        ]);
