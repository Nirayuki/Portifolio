import React from "react";
import { Route, Routes} from "react-router-dom";
import Main from './pages/main';
import TodoNira from "./pages/todonira";

const Rotas = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/todonira" element={<TodoNira />} />
        </Routes>
    )
}

export default Rotas;