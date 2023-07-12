function CharacterCard(characterInfo) {
    return (
        <li className={'w-64 rounded-md shadow-md shadow-gray-500/50 ' +
            'hover:scale-[1.1] transition duration-200 ease-in-out'}>
            <a href={"#"}>
                <img className={'rounded-t-md w-64 h-44 object-none'} src={characterInfo.image}
                     alt={characterInfo.name}/>
                <div className={'font-roboto my-3 mx-4'}>
                    <h6 className={'font-semibold text-xl'}>{characterInfo.name}</h6>
                    <p className={'font-normal text-zinc-600'}>{characterInfo.species}</p>
                </div>
            </a>
        </li>
    );
}

export default CharacterCard;
