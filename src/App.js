import {useRoutes} from "react-router-dom";
import {routes} from "./consts/routes";

function App(){
    return useRoutes(routes)
}

export default App;
