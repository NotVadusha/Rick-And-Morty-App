import MainPage from "../pages/MainPage";
import CharacterPage from "../pages/CharacterPage";
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
                element: <CharacterPage/>,
                errorElement: <ErrorPage/>
            }
        ]);
