import CabecalhoLink from "components/CabecalhoLink";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import logo from "./logo.png";

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      {/* Quando clicarmos nessa imagem, seremos redirecionados para a rota "/". */}
      <Link to="./">
        <img src={logo} alt={"Logo do Cinetag"} />
      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
};

export default Cabecalho;
