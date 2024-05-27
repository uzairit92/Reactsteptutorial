// # Start File App.js  22.05.2024
// LEC -----------------------------  #51 fetch API | GET metdod

// https://jsonplaceholder.typicode.com/users

import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function saveUser() {
    console.warn({ name, email, mobile });
    let data = { name, email, mobile };
    fetch("https://postma-echo.com/get", {
      method: "POST",
      Headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.warn("result", result);
    });
  }
  return (
    <div className="App">
      <h1> Post API Example </h1>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />
      <br /> <br />
      <input
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
      />
      <br /> <br />
      <input
        placeholder="Mobile"
        type="text"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        name="mobile"
      />
      <br /> <br />
      <button type="button" onClick={saveUser}>
        Save New User
      </button>
    </div>
  );
}

export default App;
