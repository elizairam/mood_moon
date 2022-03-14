import React from "react";
import "./App.css";
import githubLogo from "./assets/icons8-github.svg"

export default function Footer() {
  return (
    <div class="footer">
      <h5> _mood moon 2022 © | calendário lunar</h5>
      <h5> feito na <span role="img" aria-label="emoticon lua">🌓</span>por elizabet_ <a href="https://github.com/elizairam"><img src={githubLogo} alt="logo github" width={"25px"}/></a></h5>
      <h5>Ilustrações de <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Natasha Remarchuk</a> em <a href="https://icons8.com/illustrations">Ouch!</a></h5>
    </div>
  );
}
