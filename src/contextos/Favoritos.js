import { createContext, useContext, useState } from "react";

//criando contexto e designando o nome como "Favoritos"
//o contexto vai ser usado pra passarmos as informações de uma página pra outra
export const FavoritosContext = createContext()
FavoritosContext.displayName = "Favoritos"

//armazenando item com uma array e atualizando ela com o setFavorito
export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([])

    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

//encapsula a lógica de gerenciamento dos favoritos
export function useFavoritoContext() {
    //puxando o favortio e set favorito com o useContext
    const { favorito, setFavorito } = useContext(FavoritosContext)
    function adicionarFavorito(novoFavorito) {
        //verificando se há algum repetido
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        //cópia da lista atual para evitar as mudanças diretas
        let novaLista = [...favorito]

        //adiciona um item
        if (!favoritoRepetido) {
            novaLista.push(novoFavorito)
            return setFavorito(novaLista)
        }

        //se o item está na lista "favoritoRepetido" ele é removido da lista
        novaLista.splice(
            novaLista.findIndex(
                item => item.id === novaLista.find(item => item.id === novoFavorito.id).id
            ),
            1
        )
        return setFavorito(novaLista)
    }

    //retorna um objeto contendo a lista de favoritos e a função de adicionarFavorito
    return {
        favorito,
        adicionarFavorito
    }
}