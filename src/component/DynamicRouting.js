// # Start File App.js  19.05.2024
// LEC -----------------------------   # 50 Dynamic Reac Routing

import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  let users = [
    { id: 1, name: "anil", email: "anil@test.com" },
    { id: 2, name: "sam", email: "sam@test.com" },
    { id: 3, name: "peter", email: "peter@test.com" },
    { id: 4, name: "bruce", email: "bruce@test.com" },
    { id: 5, name: "tony", email: "tony@test.com" },
  ];
  return (
    <div className="App">
      <Router>
        <h1> React Dynamic Routing </h1>

        {users.map((item) => (
          <div>
            <Link to={"/user" + item.id}>
              <h3>{item.name}</h3>
            </Link>
          </div>
        ))}
      </Router>
    </div>
  );
}
export default App;
