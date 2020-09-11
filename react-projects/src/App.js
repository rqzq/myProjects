import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="Payel" surname="Samanta">
        <p>
          This is my Wife Name
        </p>
      </Greet>
      <Greet name="Shinjaann" surname="Samanta">
        <button>
          Kiss Me
        </button>
      </Greet>
    <Greet name="Random" surname="Tandem"/>
    <Welcome name="Random" surname="Tandem" />
    <Welcome name="Random" surname="Tandom" >
      <button>
        Hit Me
      </button>
    </Welcome>
    <Welcome name="Random" surname="Tandum" />
    </div>
  );
}

export default App;
