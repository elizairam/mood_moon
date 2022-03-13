import React from "react";
// import { Link } from "react-router-dom";
import "./App.css";
// import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div style={{ "background-color": "#120d31" }}>
      <div class="ui menu" style={{ backgroundColor: "#120d31" }}>
        {/* <Link to={"/"}> */}
          <div class="item">
            <div class="ui teal header" tabIndex={"0"}>
              {" "}
              Início
            </div>
          </div>
        {/* </Link> */}

        {/* <Link to={"/calendario"}> */}
          <div class="item">
            <div class="ui header" tabIndex={"1"} style={{ color: "#ffffff" }}>
              {/* <Link to={"/calendario"}> */}
              Calendário
            </div>
          </div>
        {/* </Link> */}

        {/* <Link to={"/buscar"}> */}
          <div class="item">
            <div class="ui header" tabIndex={"2"} style={{ color: "#ffffff" }}>
              Buscar
            </div>
          </div>
        {/* </Link> */}
      </div>
    </div>
  );
}
