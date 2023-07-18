import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <div className={"container"}>
            <img className={"mx-auto"} src={"/logo.svg"} alt={"Rick and Morty logo"} />
            <h1 className={"text-center text-5xl font-roboto font-bold py-6"}>Something went wrong :(</h1>
            <p className={"text-center text-gray-500 text-2xl"}>
                Return to the <Link className={"text-blue-600"} to={"/"}>home page</Link>
            </p>
        </div>
    )
}

export default ErrorPage;
