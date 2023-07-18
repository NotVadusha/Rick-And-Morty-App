import CharactersList from "../components/CharactersList";
import Search from "../components/Search";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {service} from "../services/CharactersService";
import NotFound from "../components/NotFound";
import ListSkeleton from "../components/ListSkeleton";

function MainPage() {
    const [filter, _setFilter] = useState(sessionStorage.getItem("filter") || "");

    const {data, refetch, isFetching, isError} = useQuery(
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

    return (
        <>
            <img
                className={"mx-auto my-3"}
                src="/logo.svg"
                alt="rick&morty logo"
            />
            <Search filter={filter} setFilter={setFilter}/>
            {isFetching && <ListSkeleton cards={15} />}
            {isError && <NotFound />}
            {!isError && !isFetching && data && <CharactersList charactersArray={data} />}
        </>
    );
}

export default MainPage;
