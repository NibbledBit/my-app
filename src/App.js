import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld message="Testing 123" />
      </header>
    </div>
  );
}

export default App;
