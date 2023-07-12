
function CharacterCard(characterInfo) {
    return (
        <li className={'w-64 mx-8 hover:scale-[1.1] transition duration-300 ease-in-out'}>
            <a className={'w-5'} href={"#"}>
                <img className={'w-max rounded-md'} src={characterInfo.image} alt={characterInfo.name} />
                <h2 className={'w-fit font-bold font-sans text-xl mt-4 mx-2'}>{characterInfo.name}</h2>
                <p className={'w-fit font-sans mx-2'}>{characterInfo.species}</p>
            </a>
        </li>
    );
}

export default CharacterCard;
