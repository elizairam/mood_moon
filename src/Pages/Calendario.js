import { useState, useEffect } from "react";
import "../App.css";

export default function Calendario() {
  const [currentMonthPhases, setCurrentMonthPhases] = useState([]);
  const [currentMonth, setCurrentMonth] = useState([{ mes: "" }]);

  const getMonthPhases = async () => {
    try {
      const response = await fetch(
        "https://api-fases-lunares-projeto.herokuapp.com/luas/atual/mes"
      );
      const jsonData = await response.json();
      setCurrentMonthPhases(jsonData);
      setCurrentMonth(jsonData[0]);
      console.log(currentMonthPhases);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMonthPhases();
  }, []);

  return (
    <div className="App">
      <h1>_fases do mês de {currentMonth.mes}</h1>
      {currentMonthPhases.map((monthData) => (
        <div className="calendario">
          <h2>dia {monthData.dia}</h2>
          <div className="imagem-calendario"> 
          <h2>{monthData.simbolo_lunar} </h2>
            <div className="texto-calendario">
            <h2>fase: {monthData.fase_lunar}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
