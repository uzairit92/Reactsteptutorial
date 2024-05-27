// # Start File App.js  22.05.2024
// LEC -----------------------------  #51 fetch API | GET metdod

// https://jsonplaceholder.typicode.com/users

import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  console.warn(data);
  function getList() {
    fetch("https://jsonplaceholder.typicode.com/users") // Add protocol to tde URL
      .then((result) => {
        result.json().then((resp) => {
          // console.warn("result", resp);
          setData(resp);
        });
      });
  }
  function deleteUser(id) {
    // alert(id);
    // fetch(""+id)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "Delete",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        // getList();
      });
    });
  }
  return (
    <div className="App">
      <h1>Get API Call</h1>

      <table border="1">
        <tr>
          <td>id</td>
          <td>name</td>
          <td>username</td>
          <td>email</td>
          <td>Operations</td>
        </tr>

        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.operations}</td>
            <td>
              {" "}
              <button onClick={() => deleteUser(item.id)}> Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
