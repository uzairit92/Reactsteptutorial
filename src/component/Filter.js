import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.warn(searchParams.get("age"));
  console.warn(searchParams.get("city"));
  const age = searchParams.get("age");
  const city = searchParams.get("city");
  return (
    <div>
      <h1> Filter Page</h1>
      <h3>Age is : {age}</h3>
      <h3> City is {city}</h3>
      <input
        type="text"
        onChange={(e) => setSearchParams({ text: e.target.value })}
        placeholder="Set Text in Query Params"
      />
      <Button onClick={() => setSearchParams({ age: 40 })}>
        Set age in Query Param
      </Button>
    </div>
  );
}

export default Filter;
