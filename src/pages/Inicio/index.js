import Cabecalho from "components/Cabecalho";
import React from "react";
import Rodape from "components/Rodape";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";

import videos from "json/db.json";
import styles from "./Inicio.module.css";

const Inicio = () => {
  return (
    <>
      <Banner imagem={"home"} />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          /* Estamos enviando todos os atributos da lista para o componente "Card", através do "{...video}". */
          return <Card {...video} key={video.id} />;
        })}
      </section>
      <Card id="1" capa={"imagemCapa"} />
    </>
  );
};

export default Inicio;
