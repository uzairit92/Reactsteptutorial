import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About Page </h1>
      <p>This is a About Page of our awesome</p>
      <p> And here we are learning about Router</p>
      <Link to="/"> Go to Home Page</Link>
      <li>
        <a href="/User/Anil" state={{ name: "anil sidhu", age: 27 }}>
          Anil
        </a>{" "}
      </li>
      <li>
        <a href="/User/Peter">Peter</a>{" "}
      </li>
    </>
  );
}

export default About;
