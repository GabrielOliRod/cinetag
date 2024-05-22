import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext(); //chamando o contexto e atribuindo favorito e adicionar favorito
    const ehFavorito = favorito.some((fav) => fav.id === id); //verificando se é um favorito
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar; //caso não tenha o ícone clicado será removido

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}/*chamando o link e designando ele pra ser o número do ID depois da /*/>
                <div className={styles.capas}>
                    <img //criando card
                        src={capa}
                        alt={titulo}
                        className={styles.capa}
                    />
                </div>
                <h2>{titulo}</h2>
            </Link>
            <img
                src={icone}
                alt="Favoritar Filme"
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa }); //adicionando aos favoritos
                }}
            />
        </div>
    );
}

export default Card;
