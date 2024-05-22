import Cabecalho from "components/Cabecalho"
import Container from "components/Container"
import Rodape from "components/Rodape"
import FavoritosProvider from "contextos/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase() {
    //base de todas as páginas com cabeça, rodapé, etc
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container >
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase