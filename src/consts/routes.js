import MainPage from "../pages/MainPage";
import CharacterPage from "../pages/CharacterPage";
import {service} from "../services/CharactersService";
import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

export const routes =
    createBrowserRouter(
        [
            {
                path: "/",
                element: <MainPage/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/character/:characterId",
                loader: async (charId) => {
                    return await service.getCharacter(charId.params.characterId);
                },
                element: <CharacterPage/>,
                errorElement: <ErrorPage/>
            }
        ]);
