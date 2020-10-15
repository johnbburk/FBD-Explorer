import React from "react";
import "./styles.css";
import Arrow from "./Arrow";

export default function App() {
  return (
    <div className="App">
      <h1>Free Body Diagram</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
        <Arrow x="50" />
        <Arrow x="100" />
      </svg>
    </div>
  );
}
