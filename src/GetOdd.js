import { useState } from "react";
const GetOdd = () => {
  let arr = [];
  const [number, setNumber] = useState(arr);
  let [result, setResult] = useState("");

  function getOddCount() {
    const counts = {};
    number.split(",").forEach((x) => { counts[x] = (counts[x] || 0) + 1; })
    const num = +Object.entries(counts).find(([key, value]) => value % 2 !== 0)[0];
    setResult(num);
  }
  console.log(number)
  console.log(arr)


  return (
    <div className="encript-item">
      <h3>GetOdd</h3>
      <label>
        Enter a comma separated number
      </label>
      <input
        type="text"
        placeholder="Enter a comma separated number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={getOddCount}>
        GetOdd
      </button>
      <p>{result}</p>
    </div>
  );
}

export default GetOdd;
