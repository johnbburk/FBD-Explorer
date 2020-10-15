import React from "react";
import "./styles.css";
import Arrow from "./Arrow";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      children: [<Arrow x="50" />, <Arrow x="100" />]
    };
  }

  appendChild() {
    this.setState({
      children: [...this.state.children, <Arrow x="75" />]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Free Body Diagram</h1>
        <button onClick={() => this.appendChild()}>Add force </button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
          {this.state.children.map((child) => child)}
        </svg>
      </div>
    );
  }
}

export default App;
