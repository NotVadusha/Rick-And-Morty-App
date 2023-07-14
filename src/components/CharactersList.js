import CharacterCard from "./CharacterCard";

function CharactersList(pageInfo) {
    return (
        <div className={"container mx-auto py-8"}>
            <ul className={"flex flex-wrap flex-none justify-center gap-8"}>
                {pageInfo.data.map(character => {
                    return CharacterCard(character);
                })}
            </ul>
        </div>
    );
}

export default CharactersList;