import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import PaginaBase from "pages/PaginaBase";
import PaginaErro from "pages/PaginaErro";
import Player from "pages/Player";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Dentro desse arquivo, devemos declarar quais rotas estarão presentes no projeto. */

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* A rota "/" será a rota-pai. */}
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />

          {/* Quando colocamos o ":", o valor será o nome do parâmetro. Quando colocarmos o "id", isso significa que ele será o valor em si, assim, dentro do componente "Player", através do hook "useParams()", podemos acessar o parâmetro que está na URL. */}
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<PaginaErro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
