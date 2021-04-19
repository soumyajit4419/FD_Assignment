import { useState, useEffect, createContext } from "react";
import Axios from "axios";
import Home from "./Components/Home";
import Revenue from "./Components/Revenue";
import Applications from "./Components/Applications";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [appDetails, setAllDetails] = useState([]);
  const [appStats, setAllStats] = useState([]);

  useEffect(() => {
    const url1 = "https://api.npoint.io/4ca5aaf459a573940672";
    const url2 = "https://api.npoint.io/d734975d2aee62d197ef";
    const request1 = Axios.get(url1);
    const request2 = Axios.get(url2);

    Axios.all([request1, request2])
      .then(
        Axios.spread((...res) => {
          const response1 = res[0].data;
          const response2 = res[1].data;
          setAllDetails(response1);
          setAllStats(response2);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ details: appDetails, stats: appStats }}>
        <Home />
        <Revenue />
        <Applications />
      </AppContext.Provider>
    </div>
  );
}

export default App;
