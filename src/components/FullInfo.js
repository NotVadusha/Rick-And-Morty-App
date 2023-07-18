
const FullInfo = ({data}) => {
    const additionalInfo = {
        Gender: data.gender,
        Status: data.status,
        Specie: data.species,
        Origin: data.origin.name,
        Type: data.type,
    };
    return (<>
            <img className={"my-4 rounded-full border-4 border-slate-100 "} src={data.image}
                 alt={data.name}></img>
            <h1 className={"text-5xl"}>{data.name}</h1>

            <h2 className={"my-12 text-xl text-neutral-400\t"}>Information</h2>
            <ul className={'w-1/6'}>
                {Object.entries(additionalInfo).map(([property, value]) => {
                    return (
                        <li className={"my-2"}>
                            <h3 className={"text-base font-bold"}>{property}</h3>
                            <p className={"text-sm text-slate-500 mb-6"}>{value.length > 0 ? value : "no info"}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default FullInfo;
