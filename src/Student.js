
import React from "react";


class Student extends React.Component{

  componentWillUnmount() 
  {
    alert (" componentWillUnmount called ")
  }
  render()
  {
    return (
      <div className='App'>
        <h1> Student Component </h1>
        <h2>Hello </h2>
      </div>
    )
  };
}
  export default Student;