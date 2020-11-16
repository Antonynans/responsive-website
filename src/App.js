import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Navbar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
