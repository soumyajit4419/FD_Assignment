import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "axios";
import Home from "./Components/Home";
import Revenue from "./Components/Revenue";
import Applications from "./Components/Applications";
import TableDisplay from "./Components/Table";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [appDetails, setAllDetails] = useState([]);
  const [appStats, setAllStats] = useState([]);

  useEffect(() => {
    const url1 = "https://api.npoint.io/a094a2946aebd5626f79";
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
    <AppContext.Provider value={{ details: appDetails, stats: appStats }}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
              <Revenue />
              <Applications />
            </Route>
            <Route path="/app/:id">
              <TableDisplay />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
