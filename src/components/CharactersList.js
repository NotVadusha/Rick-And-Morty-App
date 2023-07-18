import CharacterCard from "./CharacterCard";

function CharactersList({charactersArray}) {
    const sortedArray = [...charactersArray].sort((a, b)=>{
        return a.name > b.name ? 1: -1;
    });
    return (
        <div className={"container mx-auto py-8"}>
            <ul className={"flex flex-wrap flex-none justify-center gap-8"}>
                {sortedArray.map(character => <CharacterCard key={character.id} character={character}/>)}
            </ul>
        </div>
    );
}

export default CharactersList;