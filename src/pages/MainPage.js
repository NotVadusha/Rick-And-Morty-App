import CharactersList from "../components/CharactersList";
import Search from "../components/Search";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {service} from "../services/CharactersService";
import NotFound from "../components/NotFound";

function MainPage() {
    const [filter, _setFilter] = useState(sessionStorage.getItem("filter") || "");

    const {data, refetch, isLoading, isError} = useQuery(
        ["characters"],
        () => service.filterCharacterName(filter),
        {
            select: (data) => data.data.results
        }
    );

    useEffect(() => {
        refetch();
    }, [filter, refetch])

    const setFilter = (value) => {
        _setFilter(value);
        sessionStorage.setItem("filter", value);
    };

    if (isError){
        return (
            <>
                <img
                    className={"w-152 mx-auto my-3"}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1920px-Rick_and_Morty.svg.png?20220319060844"
                    alt="rick&morty logo"
                />
                <Search filter={filter} setFilter={setFilter}/>
                <NotFound />
            </>
        )
    }

    if (isLoading){

    }

    return (
        <>
            <img
                className={"w-152 mx-auto my-3"}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1920px-Rick_and_Morty.svg.png?20220319060844"
                alt="rick&morty logo"
            />
            <Search filter={filter} setFilter={setFilter}/>
            {data && <CharactersList charactersArray={data}/>}
        </>
    );
}

export default MainPage;
