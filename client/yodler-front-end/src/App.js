import React from 'react';
// import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import AdminView from "./AdminView"; 
import Home from "./Home"; 
import RegistrationForm from "./RegistrationForm";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/register">
        <RegistrationForm />
      </Route>
      <Route exact path="/admin">
        <AdminView />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
