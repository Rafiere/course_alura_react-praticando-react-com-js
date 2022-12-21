import Banner from "components/Banner";
import Titulo from "components/Titulo";
import React from "react";
import { useParams } from "react-router-dom";

import videos from "json/db.json";

import styles from "./Player.module.css";
import PaginaErro from "pages/PaginaErro";

const Player = () => {
  const parametros = useParams();

  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  });

  /* Se passarmos um ID de vídeo inválido, o usuário será encaminhado para a página de erro. */
  if (!video) {
    return <PaginaErro />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>

      {/* Esse "<iframe>" foi copiado de um vídeo no YouTube, que será exibido na página. */}

      <section className={styles.container}>
        <iframe
          width="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;
