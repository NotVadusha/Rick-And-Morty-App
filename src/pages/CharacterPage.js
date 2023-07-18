import {BiArrowBack} from "react-icons/bi";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {service} from "../services/CharactersService";
import CharacterSkeleton from "../components/CharacterSkeleton";
import FullInfo from "../components/FullInfo";

function CharacterPage() {
    const {characterId} = useParams();

    const {data, isSuccess, isFetching, isError} = useQuery(
        ['characterInfo'],
        () => service.getCharacter(characterId),
        {
            select: (data) => data.data
        }
    )
    const navigate = useNavigate();
    const isReady = (isSuccess && !isFetching)

    return (
        <div className={"flex flex-col items-center mb-32 font-roboto"}>
            <button onClick={() => {
                navigate(-1)
            }} className={"block text-lg font-bold font-karla my-6 mx-20 place-self-start"}>
                <BiArrowBack className={"inline"}/> GO BACK
            </button>

            {isFetching && <CharacterSkeleton/>}
            {isError && (<p>Something went wrong</p>)}
            {isReady && <FullInfo data={data} />}

        </div>
    );
}

export default CharacterPage;
