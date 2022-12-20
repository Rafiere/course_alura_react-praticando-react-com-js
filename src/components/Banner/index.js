import styles from "./Banner.module.css";

import React from "react";

const Banner = ({ imagem }) => {
  /* A imagem de fundo será dinâmica, de acordo com a imagem que for enviada como propriedade para esse componente. */

  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('/assets/banner-${imagem}.png')` }}
    >
      Banner
    </div>
  );
};

export default Banner;
