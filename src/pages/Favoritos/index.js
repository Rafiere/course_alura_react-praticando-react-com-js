import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Favoritos.module.css";

const Favoritos = () => {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Banner imagens="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
};

export default Favoritos;
