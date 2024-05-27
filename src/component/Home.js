import { Link, useNavigate } from "react-router-dom";

function Home() {
  // const location = useLocation();
  // console.log(location);

  const navigate = useNavigate();
  // const navToPage = () => {
  //   navigate("/about");
  // };
  const navToPage = () => {
    let x = false;
    if (x) {
      navigate("/about");
    } else {
      navigate("filter");
    }
  };
  return (
    <>
      <h1>Home Page</h1>
      <p>This is a Home Page of our awesome</p>
      <p> And here we are learning about Router</p>
      {/* <button onClick={() => navigate("/filter")}>Go to Filter Page</button>
     
     <br /> <br /> */}
      <br /> <br />
      <h2>Users Table (5 Columns)</h2>
      <table id="usersTable5" border="1">
        <thead>
          <th>
            Route Examples
            <tr>
              <Link to="/about"> Go to About Page</Link> <br />
            </tr>
            <tr>
              <button onClick={() => navigate("/about")}>
                Go to About Page
              </button>
            </tr>
            <tr>
              <button onClick={() => navigate("/filter")}>
                Go to Filter Page
              </button>
            </tr>
            <tr>
              <button onClick={() => navToPage()}>
                About and Filter Page{" "}
              </button>
            </tr>
          </th>
          <th>
            API Examples
            <tr>
              <button onClick={() => navigate("/APIGet")}>Go to APIGet </button>
            </tr>
            <tr>row2</tr>
            <tr>row3</tr>
            <tr>row4</tr>
            <tr>row5</tr>
          </th>
          <th>
            Username
            <tr>row1</tr>
            <tr>row2</tr>
            <tr>row3</tr>
            <tr>row4</tr>
            <tr>row5</tr>
          </th>
          <th>
            Email
            <tr>
              <button onClick={() => navigate("/PrevState")}>
                Previous State
              </button>
            </tr>
            <tr>
              <button onClick={() => navigate("/PrevProps")}>
                Previous Props
              </button>
            </tr>
            <tr>row3</tr>
            <tr>row4</tr>
            <tr>row5</tr>
          </th>
          <th>
            Phone
            <tr>row1</tr>
            <tr>row2</tr>
            <tr>row3</tr>
            <tr>row4</tr>
            <tr>row5</tr>
          </th>
        </thead>
        <tbody>
          <th></th>
          <th></th>
          <th></th>
        </tbody>
      </table>
    </>
  );
}

export default Home;
