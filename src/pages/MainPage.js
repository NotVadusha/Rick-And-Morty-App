import CharactersList from "../components/CharactersList";
import Search from "../components/Search";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {service} from "../services/CharactersService";
import NotFound from "../components/NotFound";
import ListSkeleton from "../components/ListSkeleton";
import Pagination from "../components/Pagination";

function MainPage() {
    const [filter, _setFilter] = useState(sessionStorage.getItem("filter") || "");
    const [page, _setPage] = useState(sessionStorage.getItem("page") || 1)

    const {data, refetch, isFetching, isError} = useQuery(
        ["characters"],
        () =>
            filter.length > 0 ?
                service.filterCharacterName(filter, page) :
                service.getCharactersPage(page)
        ,
        {
            select: (data) => data.data
        }
    );

    useEffect(() => {
        sessionStorage.setItem("filter", filter);
        refetch();
    }, [filter, page, refetch])

    const setPage = (page) => {
        _setPage(page);
        sessionStorage.setItem("page", page);
    }

    const setFilter = (value) => {
        _setFilter(value);
        setPage(1)
        sessionStorage.setItem("filter", value);
    };

    const handleNext = () => {
        setPage(page + 1)
    };

    const handlePrev = () => {
        setPage(page - 1)
    };

    const isReady = !isError && !isFetching && data;
    const isNotFound = (!isFetching && !data?.results) || data?.results < 1;

    return (
        <>
            <img
                className={"mx-auto my-3"}
                src="/logo.svg"
                alt="rick&morty logo"
            />
            <Search filter={filter} setFilter={setFilter}/>
            {!isNotFound && <Pagination handlePrev={handlePrev}
                        handleNext={handleNext}
                        curPage={page}
                        pagesAmount={data?.info?.pages}
            />}
            {isFetching && <ListSkeleton cards={15}/>}
            {isNotFound && <NotFound/>}
            {isReady && <CharactersList charactersArray={data.results}/>}
        </>
    );
}

export default MainPage;
