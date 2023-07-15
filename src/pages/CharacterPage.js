import {BiArrowBack} from "react-icons/bi";
import {useLoaderData, useNavigate} from "react-router-dom";

function CharacterPage() {
    const characterInfo = useLoaderData();
    const additionalInfo = {
            Gender: characterInfo.data.gender,
            Status: characterInfo.data.status,
            Specie: characterInfo.data.species,
            Origin: characterInfo.data.origin.name,
            Type: characterInfo.data.type,
        },
        prevPage = useNavigate();

    return (
        <div className={"flex flex-col items-center mb-32 font-roboto"}>
            <button onClick={()=>{prevPage(-1)}} className={"block text-lg font-bold font-karla my-6 mx-20 place-self-start"}>
                <BiArrowBack className={"inline"}/> GO BACK
            </button>

            <img className={"my-4 rounded-full border-4 border-slate-100 "} src={characterInfo.data.image}
                 alt={characterInfo.data.name}></img>
            <h1 className={"text-5xl"}>{characterInfo.data.name}</h1>

            <h2 className={"my-12 text-xl text-neutral-400\t"}>Information</h2>
            <ul className={'w-1/6'}>
                {Object.entries(additionalInfo).map((line) => {
                    return (
                        <li className={"my-2"}>
                            <h3 className={"text-base font-bold"}>{line[0]}</h3>
                            <p className={"text-sm text-slate-500 mb-6"}>{line[1].length>0?line[1]:"no info"}</p>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
}

export default CharacterPage;
