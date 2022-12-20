import Inicio from "pages/Inicio";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Dentro desse arquivo, devemos declarar quais rotas estarão presentes no projeto. */

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
