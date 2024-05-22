import styles from './Banner.module.css'

function Banner({ imagem }) {
    return (
        <div
            className={styles.capa}
            style={{ backgroundImage: `url('/assets/banner-${imagem}.png')` }} //exporantado imagem do banner
        >

        </div>
    )
}

export default Banner