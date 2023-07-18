
function CharacterSkeleton() {
    return (
        <div className={"animate-pulse"}>
            <div className={"my-4 w-76 h-76 rounded-full border-slate-100 bg-gray-300"}></div>
            <div className={"my-4 h-16 w-76 rounded bg-gray-300"}></div>

            <div className={"my-12 text-center text-xl text-neutral-400"}>Information</div>
            <ul className={'w-56 mx-auto'}>
                {Array(5).fill(0).map(() =>
                    <li className={"my-2"}>
                        <div className={"mb-1 h-5 rounded bg-gray-300 w-24"}></div>
                        <div className={"mb-6 h-4 rounded bg-gray-300 w-16"}></div>
                    </li>
                )
                }
            </ul>
        </div>
    )
}

export default CharacterSkeleton;
