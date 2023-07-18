import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

function Pagination({handlePrev, handleNext, curPage, pagesAmount}) {
    return (
        <div className={"w-fit mx-auto"}>
            <div className={"w-8 h-8 inline-block mx-4"}>
                {
                    curPage > 1 &&
                    <button onClick={handlePrev}>
                        <AiOutlineLeft className={"w-6 h-6 m-1"}/>
                    </button>
                }
            </div>
            <span className={"m-1 text-2xl font-roboto font-semibold align-top"}>{curPage}</span>
            <div className={"w-8 h-8 inline-block mx-4"}>
                {
                    curPage < pagesAmount &&
                    <button onClick={handleNext}>
                        <AiOutlineRight className={"w-6 h-6 m-1"}/>
                    </button>
                }
            </div>
        </div>
    )
}

export default Pagination;
