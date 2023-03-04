import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      const res = await axios.get("https://coursera-twitter-api.herokuapp.com/tweets");
      setData(res.data)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log('data fetch')
    fetchData()
  });

  return (
  <div>
    {data.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
  </div>
  )
}

export default App;
