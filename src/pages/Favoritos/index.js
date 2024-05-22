import Banner from 'components/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo'
import { useFavoritoContext } from 'contextos/Favoritos'
import Card from 'components/Card'

function Favoritos() {
    const { favorito } = useFavoritoContext()
    return (
        //criando a página de favoritos
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <div className={styles.container}>
                {favorito.length === 0 ? ( /* verificando se a lista de favoritos está vazia*/
                    <h3>
                        Você ainda não adicionou nenhum favorito.<br />
                        Que tal procurar um em nossa lista? :)
                    </h3>
                ) : ( //caso contrário ele vai mapear a lista de favoritos e retornar os cards dos favoritos
                    favorito.map((fav) => {
                        return <Card {...fav} key={fav.id} />;
                    })
                )}
            </div>

        </>
    )
}

export default Favoritos