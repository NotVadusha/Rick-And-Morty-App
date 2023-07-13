import CharactersList from "../components/CharactersList";
import {useLoaderData} from "react-router-dom";

function MainPage(pageInfo) {
    return (
        <>
            <img
                className={"w-80 mx-auto my-3"}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1920px-Rick_and_Morty.svg.png?20220319060844"
                alt="rick&morty logo"
            />
            {CharactersList(pageInfo)}
        </>
    );
}

export default MainPage;
