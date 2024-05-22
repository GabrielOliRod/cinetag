import { Link } from 'react-router-dom'
import styles from './CabecalhoLink.module.css'

function CabecalhoLink({ url, children }) {
    //criação dos links do cabeçalho para facilitar o uso
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>

    )
}

export default CabecalhoLink