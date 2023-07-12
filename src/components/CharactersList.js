import CharacterCard from "./characterCard";

function CharactersList(pageInfo) {
    return (

        <div className={"container"}>
            <ul className={"flex flex-wrap"}>
                {pageInfo.data.map(character => {
                    console.log(character)
                    return CharacterCard(character);
                })}
            </ul>
        </div>

    );
}

export default CharactersList;