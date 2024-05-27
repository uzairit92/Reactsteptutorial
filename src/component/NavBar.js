import { NavLink } from "react-router-dom";
// below is with // links below
// import { Link, NavLink } from "react-router-dom";
import ContactUs from "./ContactUs";
function NavBar() {
  return (
    <ul className="navbar">
      {/* <li>
        {" "}
        <Link to="/about">About </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/about">Home </Link>{" "}
      </li> */}
      {/* // When we did not use ancher tag because it will refrese the page and
      work as javascrip */}
      <li>
        <NavLink className="nav-bar-link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-bar-link"
          style={({ isActive }) => {
            return { color: isActive ? "skyblue" : "red" };
          }}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-bar-link"
          style={{ color: "Yellow", backgroundColor: "Black" }}
          to="/ContactUs"
        >
          ContactUs
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-bar-link"
          style={({ isActive }) => {
            return { color: isActive ? "skyblue" : "red" };
          }}
          to="/filter"
        >
          Filter
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-bar-link" to="/Login">
          Login
        </NavLink>
      </li>
    </ul>
  );
}
export default NavBar;
