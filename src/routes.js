import Favoritos from "pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";

function AppRoutes() {
    return (
        <BrowserRouter /*avisa que tão rotas dentro dele*/>
            <Routes /*faz a função de rotear*/>
                <Route path="/" element={<PaginaBase />} /*o path é onde ele irá constar depois da / e o element o que irá retornar*/ >
                    <Route index element={<Inicio />} /*index é pra designar como página inicial*/ />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/:id" element={<Player />} /*o : é pra puxar uma informação, nesse caso o id*/ />
                    <Route path="*" element={<NaoEncontrada />} /* o "*" é pra ser qualquer coisa que fuja dos outros paths*/ />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;