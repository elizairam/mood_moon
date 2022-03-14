import  React, { useState, useEffect } from "react";
import "../App.css";

export default function DisplayData({ ano, mes }) {
  const [currentMonthPhases, setCurrentMonthPhases] = useState([]);
  const [currentMonth, setCurrentMonth] = useState([{ mes: "" }]);

  const getMonthPhases = async () => {
    try {
      const response = await fetch(
        `https://api-fases-lunares-projeto.herokuapp.com/luas/ano/${ano}/mes/${mes}`
      );
      const jsonData = await response.json();
      setCurrentMonthPhases(jsonData);
      setCurrentMonth(jsonData[0]);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMonthPhases();
  }, [currentMonth]);

  return (
    <div>
      <h1>_calendário vigente</h1>
      {currentMonthPhases.map((monthData) => (
        <div className="calendario">
          <h2>
            {monthData.dia} {monthData.mes} {monthData.ano}
          </h2>
          <div className="imagem-calendario">
            <h2>{monthData.simbolo_lunar} </h2>
            <div className="texto-calendario">
              <h2>{monthData.fase_lunar}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
