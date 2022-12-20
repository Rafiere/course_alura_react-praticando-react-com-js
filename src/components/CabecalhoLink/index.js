import React from "react";
import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.module.css";

const CabecalhoLink = ({ children, url }) => {
  return (
    <Link to={url} className={styles.link}>
      {/* Tudo o que colocarmos dentro da tag do componente "CabecalhoLink" será considerado como "children". */}
      {children}
    </Link>
  );
};

export default CabecalhoLink;
