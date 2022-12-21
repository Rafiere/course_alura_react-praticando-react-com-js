import React from "react";
import styles from "./Container.module.css";

/* Vamos receber trechos de código que serão filhos do container, e o container aplicará os estilos do arquivo "Container.module.css" nesses filhos. */
const Container = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default Container;
