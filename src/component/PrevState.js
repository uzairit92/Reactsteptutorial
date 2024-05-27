// https://www.youtube.com/watch?v=Nki0Nw_tRVU&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=69

import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  function updatecounter() {
    // setCount(Math.floor(Math.random() * 10));

    // let rand = Math.floor(Math.random() * 10);
    // // setCount(rand);
    // setCount((pre) => {
    //   console.warn(pre);
    //   //   if ((pre = rand < 5)) {
    //   //     alert("topup");
    //   //   }
    //   if (pre < 5) {
    //     alert("low value");
    //   }
    //   return rand;
    // });

    for (let i = 0; i < 5; i++) {
      //   setCount(count + 5);
      setCount((pre) => pre + 1);
    }
  }
  return (
    <div className="App">
      <h1> {count} </h1>
      <button onClick={updatecounter}> Click me to update counter </button>
    </div>
  );
}

export default App;
