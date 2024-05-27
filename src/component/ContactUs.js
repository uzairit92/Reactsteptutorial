import { Link, Outlet } from "react-router-dom";

function ContactUs() {
  return (
    <div>
      <h1>Contact Us Page </h1>
      <p>Here we have some other business </p>
      <Link to="Company"> Company </Link>
      <Link to="Channel"> Channel </Link>
      <Link to="Other"> Other </Link>
      <Outlet />
    </div>
  );
}

export default ContactUs;
