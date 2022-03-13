import { useState } from "react";
import "../App.css";
import ilustracao from "../assets/clip-366.png";
import DisplayData from "./DisplayData";

export default function Buscar() {
  const [ano, setAno] = useState(2000);
  const [mes, setMes] = useState("janeiro");
  const [dia, setDia] = useState(1);
  const [data, setData] = useState([
    { ano: "", mes: "", dia: "", fase_lunar: "", simbolo_lunar: "" },
  ]);
  const [resultado, setResultado] = useState(false);
  const [check, setCheck] = useState(false);

  const searchData = async () => {
    try {
      const response = await fetch(
        `https://api-fases-lunares-projeto.herokuapp.com/luas/ano/${ano}/mes/${mes}/dia/${dia}`
      );
      const jsonData = await response.json();
      setData(jsonData[0]);
      setResultado(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="App">
      <img
        class="App-logo"
        src={ilustracao}
        alt="lua e planetas"
        width={"320px"}
      />
      <div class="ui massive form">
        <div class="two fields">
          <div class="field">
            <label class="ui teal header">Ano</label>
            <input
              type="number"
              defaultValue={2000}
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              name={ano}
            />
          </div>
          <div class="field">
            <label class="ui teal header">Mês</label>
            <input
              type="text"
              defaultValue={"janeiro"}
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              name={mes}
            />
          </div>

          <div class="three wide field">
            <label class="ui teal header">Dia</label>
            <input
              type="number"
              defaultValue={1}
              value={dia}
              onChange={(e) => setDia(e.target.value)}
              name={dia}
            />
          </div>
        </div>
        <div class="ui massive teal submit button" onClick={searchData}>
          Buscar lua
        </div>
      </div>
      {resultado ? (
        <>
          <h1>{data.simbolo_lunar}</h1>
          <h1 class="titulo">{data.fase_lunar}</h1>
          <h1 class="ui teal header">
            {data.dia} {data.mes} {data.ano}
          </h1>
          <div class="ui toggle checkbox">
            <input
              type="checkbox"
              name="public"
              onClick={() => setCheck(!check)}
            />
            <label>
              <p class="titulo">detalhes</p>
            </label>
          </div>
          {check ? <DisplayData ano={data.ano} mes={data.mes} /> : null}
        </>
      ) : null}
    </div>
  );
}
