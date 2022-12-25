import React, { useState } from "react";
import "./create-trip-page.css";
import { MiddleSizeButtonRedirect } from "../../components/buttons/middle-size-button-redirect/middle-size-button-redirect";
import { createTrip } from "../../api/trips/trips-api";
import { useNavigate } from "react-router-dom";

export function CreateTripPage() {
  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleCreatorChange = (e: any) => {
    setCreator(e.target.value);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (name && creator) {
      await createTrip(name, creator);
      alert(`Trip created !`);
      navigate("/");
    } else {
      alert(`"name" and "creator" must be provided`);
    }
  };

  return (
    <div>
      <MiddleSizeButtonRedirect path="/" text={"Back to home"} />
      <h1>New trip 🧳</h1>
      <div className="trips-creation-container">
        <div className="tripsCreationForm">
          <form>
            <ul>
              <li>
                <label htmlFor="tripName">Name of your trip : </label>
                <input
                  id="tripName"
                  name="tripName"
                  type="text"
                  onChange={(e) => handleNameChange(e)}
                  value={name}
                  required
                />
              </li>
              <li>
                <label htmlFor="tripCreator">Your name : </label>
                <input
                  id="tripCreator"
                  name="tripCreator"
                  type="text"
                  onChange={(e) => handleCreatorChange(e)}
                  value={creator}
                  required
                />
              </li>
              <li>
                <input
                  type="submit"
                  id="submit"
                  value="Create the trip !"
                  onClick={(e) => handleSubmit(e)}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
