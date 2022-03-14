import React from "react";
import "./App.css";
import Inicio from "./Pages/Inicio";
import Calendario from "./Pages/Calendario";
import Buscar from "./Pages/Buscar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <div style={{ "background-color": "#120d31" }}>
          <div class="ui menu" style={{ backgroundColor: "#120d31" }}>
            <Link to={"/"}>
              <div class="item">
                <div class="ui teal header" tabIndex={"0"}>
                  {" "}
                  Início
                </div>
              </div>
            </Link>

            <Link to={"/calendario"}>
              <div class="item">
                <div
                  class="ui header"
                  tabIndex={"1"}
                  style={{ color: "#ffffff" }}
                >
                  Calendário
                </div>
              </div>
            </Link>
            <Link to={"/buscar"}>
              <div class="item">
                <div
                  class="ui header"
                  tabIndex={"2"}
                  style={{ color: "#ffffff" }}
                >
                  Buscar
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/calendario" element={<Calendario />}></Route>
          <Route path="/buscar" element={<Buscar />}></Route>
        </Routes>
      </Router>
    </>
  );
}
