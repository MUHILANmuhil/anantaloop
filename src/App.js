import "./App.css";
import All from "./Components/All";
import { getdetails,addetail } from "./Slice";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function App() {
  let dispath = useDispatch();
  useEffect(() => {
    axios.get("https://api.covidtracking.com/v1/us/daily.json").then((res) => {
      dispath(addetail(res.data));
    });
  });
  const val = useSelector(getdetails);
  // console.log(val);
  return <div className="App">{val.length === 0 ? <h2 className="loader">Loading...</h2> : <All />}</div>;
}

export default App;
