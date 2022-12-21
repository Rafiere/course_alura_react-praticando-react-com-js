import { useFavoritoContext } from "contextos/Favoritos";
import React from "react";
import styles from "./Card.module.css";

import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

const Card = ({ id, titulo, capa }) => {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const isFavorito = favorito.some((fav) => fav.id === id);

  const icone = !isFavorito ? iconeFavoritar : iconeDesfavoritar;

  return (
    <div className={styles.container}>
      {/* Estamos utilizando a tag "link" para redirecionar para uma rota de acordo com o ID que o card possui. */}
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>

      <img
        src={icone}
        alt={"Favoritar filme"}
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
};

export default Card;
