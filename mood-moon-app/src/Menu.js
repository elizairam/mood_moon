import React from "react";
import "./App.css";

export default function Menu() {
  return (
    <div style={{"background-color": "#120d31"}}>
      <div class="ui menu" style={{"backgroundColor": "#120d31"}}>
      <div class="item">
          <div class="ui teal header" tabIndex={"0"}>Início</div>
        </div>
        <div class="item">
          <div class="ui header" tabIndex={"1"} style={{"color": "#ffffff"}}>Calendário</div>
        </div>
        <div class="item">
          <div class="ui header" tabIndex={"2"} style={{"color": "#ffffff"}}>Buscar</div>
        </div>
      </div>
    </div>
  );
}
