import React, { useContext } from "react";
import Details from "./Details";
import { AppContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";

function Applications() {
  const appDetails = useContext(AppContext);

  return (
    <div className="__apps">
      {appDetails.details.map((value) => (
        <Details
          key={value.id}
          appName={value.appName}
          id={value.id}
          companyName={value.publisherName}
        />
      ))}
    </div>
  );
}

export default Applications;
