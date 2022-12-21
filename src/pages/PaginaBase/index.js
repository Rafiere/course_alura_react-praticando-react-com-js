import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
  return (
    <>
      <main>
        <Cabecalho />
        {/* Todo o valor que estiver no contexto "FavoritosContext" poderá ser acessado pelas rotas "/" e "/favoritos". */}
        <FavoritosProvider>
          <Container>
            {/* Esse componente possibilita a criação de uma rota-pai, e o "Outlet" será todas as rotas-filhas que forem encaixadas dentro da rota-pai. */}
            <Outlet />
          </Container>
        </FavoritosProvider>
        <Rodape />
      </main>
    </>
  );
};

export default PaginaBase;
