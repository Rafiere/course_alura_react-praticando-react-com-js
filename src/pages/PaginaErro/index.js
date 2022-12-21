import React from "react";
import styles from "./PaginaErro.module.css";

const PaginaErro = () => {
  return (
    <section className={styles.container}>
      <h2>Ops</h2>
      <p>O conteúdo que você procura não foi encontrado.</p>
    </section>
  );
};

export default PaginaErro;
