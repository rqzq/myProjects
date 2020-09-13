import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Welcome name="Bishwajit" fullname="Bishwajit Samanta" />
      <Greet name="Bishwajit" surname="Samanta" />
    </div>
  );
}

export default App;
