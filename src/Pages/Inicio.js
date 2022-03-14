import  React, { useState, useEffect } from "react";
import lua from "../assets/clip-713.png";
import "../App.css";

export default function Inicio() {
  const [moons, setMoons] = useState([]);

  const getMoon = async () => {
    try {
      const response = await fetch(
        "https://api-fases-lunares-projeto.herokuapp.com/luas/atual"
      );
      const jsonData = await response.json();
      setMoons(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMoon();
  });

  return (
    <div className="App">
       <h1 className="ui teal header">_mood moon</h1>
      <header className="App-header">
        <img src={lua} className="App-logo" alt="logo" />
        {moons.map((moon) => (
          <>
            <h2>hoje é dia de:</h2>
            <h2>{moon.simbolo_lunar}</h2>
            <h1 class="titulo">{moon.fase_lunar}</h1>

            <h4>
              começou no dia {moon.dia} de {moon.mes} de {moon.ano}
            </h4>
          </>
        ))}
      </header>
    </div>
  );
}

