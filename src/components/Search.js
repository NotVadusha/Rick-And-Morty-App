import {AiOutlineSearch} from "react-icons/ai";

function Search({filter, setFilter}) {

    const handleChange = (e) => {
        setFilter(e.target.value);
    }

    return (
        <div className={"container mx-auto rounded-lg border border-gray-400 p-4 mt-4 mb-8"}>
            <AiOutlineSearch className={"inline w-6 h-6"}/>
            <input type="text" className="w-max ml-4 font-roboto text-md focus-visible:outline-none"
                   value={filter}
                   id={"searchInput"}
                   placeholder={"Filter by name..."}
                   onChange={handleChange}
            />
        </div>
    )
}

export default Search;
