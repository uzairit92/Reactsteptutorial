// # Start File App.js  14.05.2024
// LEC ----------------------------- #39 Pure component in ReactJs

import "./App.css";
import React, { PureComponent } from "react";
class App extends PureComponent {
  render() {
    console.warn("User component check-rerendering");
    return (
      <div className="App">
        <h1> User Component {this.props.count}</h1>
      </div>
    );
  }
}
export default App;
