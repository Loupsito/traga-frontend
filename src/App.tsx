import React, { useEffect, useState } from "react";
import "./App.css";
import { TravelSelectionButton } from "./components/travel-selection-button/travel-selection-button";
import { Travel } from "./model/travel";

function App() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/travel?userId=dd")
      .then((res) => res.json())
      .then(
        (result) => {
          setTravels(result);
          console.log("fetch result = ", result);
        },
        (error) => {
          console.error("fetch error = ", error);
        }
      );
  }, []);

  return (
    <div className="App">
      {travels.map((data: Travel) => {
        return (
          <TravelSelectionButton
            name={data.name}
            creationDate={data.creationDate}
            creator={data.creator}
          />
        );
      })}
    </div>
  );
}

export default App;
