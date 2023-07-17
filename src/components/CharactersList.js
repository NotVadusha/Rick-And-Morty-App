import CharacterCard from "./CharacterCard";

function CharactersList({charactersArray}) {
    return (
        <div className={"container mx-auto py-8"}>
            <ul className={"flex flex-wrap flex-none justify-center gap-8"}>
                {charactersArray.map(character => <CharacterCard character={character}/>)}
            </ul>
        </div>
    );
}

export default CharactersList;