import styles from './Container.module.css'

function Container({ children }) {
    return (
        <section className={styles.container} /* criando o contaier que vai servir pro código todo*/>
            {children}
        </section>
    )
}

export default Container