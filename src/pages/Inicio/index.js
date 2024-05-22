import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";
import styles from './Inicio.module.css';

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        //fazendo a conexão com o server do json para puxar as informações dos cards
        fetch('https://my-json-server.typicode.com/GabrielOliRod/CineTag-API/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => { //mapeando o array e retorando os cards dos vídeos
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;