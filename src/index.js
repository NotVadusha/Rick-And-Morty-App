import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/MainPage";
import CharactersService from "./services/CharactersService";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import CharactersList from "./components/CharactersList";
import CharacterPage from "./pages/CharacterPage";

const service = new CharactersService();

const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <MainPage data={(await service.getCharactersPage(1)).data.results}/>,
            },
            {
                path: "character/:characterId",
                loader: async (charId)=>{
                    return await service.getCharacter(charId.params.characterId);
                },
                element: <CharacterPage/>
            }
        ]
    )
;

const testRick = JSON.parse(localStorage.getItem('charactersInfo'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
