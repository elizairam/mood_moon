import { useState, useEffect } from "react";
import Menu from "./Menu";
import lua from "./assets/clip-713.png";

import "./App.css";

function App() {
  const [moons, setMoon] = useState([]);

  const getMoon = async () => {
    try {
      const response = await fetch(
        "https://api-fases-lunares-projeto.herokuapp.com/luas/atual"
      );
      const jsonData = await response.json();
      setMoon(jsonData);
      console.log(moons);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMoon();
  });

  return (
    <div className="App">
      <Menu/>
      <header className="App-header">
        <img src={lua} className="App-logo" alt="logo" />
        {moons.map((moon) => (
          <>
            <h1>{moon.simbolo_lunar}</h1>
            <h2>{moon.fase_lunar}</h2>

            <h4>
              começou no dia {moon.dia} de {moon.mes} de {moon.ano}
            </h4>
          </>
        ))}
      </header>
    </div>
  );
}

export default App;
