    import React from "react";
    import { Route, Routes} from "react-router-dom";
    import Main from './pages/main';
    import TodoNira from "./pages/todonira";
    import Vorago from "./pages/vorago.tsx";

    const Rotas = () => {

        return (
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/todonira" element={<TodoNira />} />
                <Route path="/vorago" element={<Vorago/>}/>
            </Routes>
        )
    }

    export default Rotas;