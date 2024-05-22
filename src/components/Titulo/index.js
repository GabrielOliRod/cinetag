import styles from './Titulo.module.css'

function Titulo({ children }) {
    return (
        <div className={styles.texto}>
            {children /*criado como chrildren pra poder ser usado de outros jeitos, mas sempre com o mesmo estilo */}
        </div>
    )
}

export default Titulo