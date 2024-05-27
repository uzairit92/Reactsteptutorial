import { useParams, useLocation } from "react-router-dom";

function User() {
  const params = useParams();
  const { name } = params;

  const location = useLocation();
  console.log(location);

  console.warn(name);
  return (
    <div>
      <h1>This is {name}'s Page</h1>
    </div>
  );
}
export default User;
