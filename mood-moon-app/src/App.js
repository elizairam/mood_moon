// import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Calendario from "./Pages/Calendario";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route exact path="/calendario">
            <Calendario />
          </Route>
        </Switch>
      </Router>
    </>
  );
}