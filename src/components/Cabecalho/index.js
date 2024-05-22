import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import logo from './logo.png'
import CabecalhoLink from '../CabecalhoLink'

function Cabecalho() {
    //criação do cabeçalho da página com o Logo e as páginas Home e Favoritos
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do CineTag" />
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho