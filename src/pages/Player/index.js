import Banner from 'components/Banner'
import styles from './Player.module.css'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada'
import { useEffect, useState } from 'react'

function Player() {
    const [video, setVideo] = useState()
    const parametros = useParams()
    //puxando os id's do server json
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/GabrielOliRod/CineTag-API/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    })

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe //trazendo o vídeo com o iframe
                    width="100%"
                    src={video.link}
                    title={video.id}
                />
            </section>
        </>
    )
}

export default Player
