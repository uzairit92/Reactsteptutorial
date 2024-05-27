import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const Login = () => {
    localStorage.setItem("Login", true);
    Navigate("/");
  };
  const Navigate = useNavigate();
  useEffect(() => {
    let Login = localStorage.getItem("Login");
    if (!Login) {
      Navigate("/");
    }
  });
  return (
    <div>
      <h1>Login Page </h1>
      <br />
      <input type="text" /> <br />
      <br />
      <input type="text" /> <br />
      <br />
      <button onClick={Login}>Login</button>
    </div>
  );
}

export default Login;
