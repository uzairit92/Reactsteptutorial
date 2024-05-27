// LEC #58 Previous Props with Hooks

import React, { useEffect, useRef } from "react";

function PrePropsUser(props) {
  const lastVal = useRef();
  useEffect(() => {
    lastVal.current = props.count;
  });

  const previousProps = lastVal.current;
  return (
    <div>
      <h1> Previous Props with Hooks </h1>

      <h2> User Component current Value {props.count}</h2>

      <h3> Previous Value {previousProps}</h3>

      <h4> Diff {props.count - previousProps}</h4>
    </div>
  );
}

export default PrePropsUser;
