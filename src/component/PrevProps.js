// https://www.youtube.com/watch?v=Nki0Nw_tRVU&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=69

// LEC #58 Previous Props with Hooks

import "./App.css";
import React from "react";
import PrepropsUser from "./PrePropsUser";

function PrevProps() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <PrepropsUser count={count} />
      <button
        onClick={() => {
          setCount(Math.floor(Math.random() * 10));
        }}
      >
        Update Counter
      </button>
    </div>
  );
}

export default PrevProps;
