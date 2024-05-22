import styles from './Rodape.module.css'

function Rodape() {
    //criando o rodapé da página
    return (
        <footer className={styles.rodape}>
            <section className={styles.left}>
                <ul>
                    <li>
                        <a href='https://github.com/GabrielOliRod' target='_blank' rel="noreferrer">
                            <img src='/assets/gh.png' alt='Logo do GitHub' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/@GabrielOliRod' target='_blank' rel="noreferrer">
                            <img src='/assets/yt.png' alt='Logo do YouTube' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/gabrielolirod/' target='_blank' rel="noreferrer">
                            <img src='/assets/ld.png' alt='Logo do Linkedin' />
                        </a>
                    </li>
                </ul>
            </section>
            <section className={styles.center}>
                <h3>A plataforma não hospeda nenhum vídeo em nossos servidores, apenas, de forma automática,<br /> indexamos os arquivos que são capturados da plataforma "Youtube".</h3>
            </section>
            <section className={styles.right}>
                <h3>Desenvolvido por Gabriel de O. Rodrigues ©️
                </h3>
            </section>
        </footer>
    )
}

export default Rodape
