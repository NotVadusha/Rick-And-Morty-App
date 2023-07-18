function ListSkeleton({cards}) {
    return (
        <div className={"container mx-auto"}>
            <ul className={"flex flex-wrap flex-none justify-center gap-8 animate-pulse"}>
                {Array(cards).fill(0).map((item, index) =>
                    <li key={index}>
                        <div className={"w-64 p-4 rounded-md shadow-md shadow-gray-500/50"}>
                            <div className={'rounded-md w-56 h-44 mx-auto bg-gray-300'}/>
                            <div className={'font-roboto my-3'}>
                                <div className={'w-56 rounded-md h-6 bg-gray-300 mb-2'}/>
                                <div className={'w-48 rounded-md h-6 bg-gray-300'}/>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ListSkeleton;
