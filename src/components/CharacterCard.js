import {Link} from "react-router-dom";

function CharacterCard({character}) {
    return (
        <li className={'w-64 rounded-md shadow-md shadow-gray-500/50 ' +
            'hover:scale-[1.1] transition duration-200 ease-in-out'}>
            <Link to={`character/${character.id}`}>
                <img className={'rounded-t-md w-64 h-44 object-none'} src={character.image}
                     alt={character.name}/>
                <div className={'font-roboto my-3 mx-4'}>
                    <h6 className={'font-semibold text-xl'}>{character.name}</h6>
                    <p className={'font-normal text-zinc-600'}>{character.species}</p>
                </div>
            </Link>
        </li>
    );
}

export default CharacterCard;
