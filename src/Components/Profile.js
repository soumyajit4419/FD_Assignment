import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";

function Profile() {
  const [uName, setUname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUname(user.displayName);
      setEmail(user.email);
    }
  }, []);

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Logout");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h5> Hello {uName} !</h5>
      <strong>Your email is {email}</strong>
      <br />
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
