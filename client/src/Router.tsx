import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import CreateAlimentos from "./routes/Alimentos/Create";
import ReadAlimentos from "./routes/Alimentos/Read";
import CreateMenu from "./routes/Menu/Create";
import ReadMenu from "./routes/Menu/Read";
import ActivateProgramacion from "./routes/Programacion/Activate";
import CreateProgramacion from "./routes/Programacion/Create";
import UpdateProgramacion from "./routes/Programacion/Update";
import ActivateSemana from "./routes/Semana/Activate";
import ReadSemana from "./routes/Semana/Read";

function Router({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={children}>
          <Route index element={<Home />} />
          <Route path="alimentos">
            <Route path="crear" element={<CreateAlimentos />} />
            <Route path="ver" element={<ReadAlimentos />} />
          </Route>
          <Route path="menu">
            <Route path="crear" element={<CreateMenu />} />
            <Route path="ver" element={<ReadMenu />} />
          </Route>
          <Route path="programacion">
            <Route path="activar" element={<ActivateProgramacion />} />
            <Route path="crear" element={<CreateProgramacion />} />
            <Route path="actualizar" element={<UpdateProgramacion />} />
          </Route>
          <Route path="semana">
            <Route path="activar" element={<ActivateSemana />} />
            <Route path="ver" element={<ReadSemana />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
