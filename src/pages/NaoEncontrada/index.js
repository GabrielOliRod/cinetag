import styles from './NaoEncontrada.module.css'

function NaoEncontrada() {
    return (
        //página de "não encontrada" caso algum link saia do padrão
        <>
            <section className={styles.container}>
                <h2>Opa!</h2>
                <p>O conteúdo não foi encontrado!</p>
                <p>Já tentou verificar o link? :)</p>
            </section>
        </>
    )
}

export default NaoEncontrada