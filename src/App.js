import { useState, useEffect } from "react";
import AuthPage from "./Components/AuthPage";
import Profile from "./Components/Profile";
import { auth } from "./Firebase/Firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="App">{user !== null ? <Profile /> : <AuthPage />}</div>
  );
}

export default App;
