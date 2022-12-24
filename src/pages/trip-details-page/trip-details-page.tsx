import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import { MiddleSizeButtonRedirect } from "../../components/buttons/middle-size-button-redirect/middle-size-button-redirect";
import { Trip } from "../../model/trip";
import "./trip-details-page.css";
import "../../components/buttons/general-themes-buttons.css";
import { updateTrip } from "../../api/trips/trips-api";
import { SaveTripDto } from "../../api/trips/trips.dto";

export function TripDetailsPage() {
  const trip = useLoaderData() as Trip;
  const [name, setName] = useState(trip.name);
  const [creator, setCreator] = useState(trip.creator);
  const [isEditMode, setIsEditMode] = useState(false);
  const cssClass = isEditMode ? "styleEditModeOn" : "styleEditModeOff";

  const saveTrip = async (saveTripRequest: SaveTripDto): Promise<void> => {
    try {
      await updateTrip({
        idTrip: trip.id,
        name: saveTripRequest.name,
        creator: saveTripRequest.creator,
      });
    } catch (e) {
      console.error(e);
    }
  };
  const handleNameChange = (e: any) => {
    setName(e.currentTarget.textContent);
  };

  const handleCreatorChange = (e: any) => {
    setCreator(e.currentTarget.textContent);
  };
  return (
    <div>
      <MiddleSizeButtonRedirect path="/" text={"Back to home"} />
      <button className="button-middle-size" onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "Deactivate Edit mode" : "Activate Edit mode"}
      </button>

      <h1
        suppressContentEditableWarning={true}
        contentEditable={isEditMode}
        onInput={(e) => handleNameChange(e)}
        onBlur={() => saveTrip({ name: name })}
        className={cssClass}
      >
        {trip.name}
      </h1>

      <div className="table-wrapper">
        <table className="fl-table">
          <tbody>
            <tr>
              <th>Creator</th>
              <th>Creation date</th>
            </tr>
            <tr>
              <td
                suppressContentEditableWarning={true}
                contentEditable={isEditMode}
                onInput={(e) => handleCreatorChange(e)}
                onBlur={() => saveTrip({ creator: creator })}
                className={cssClass}
              >
                {trip.creator}
              </td>
              <td>{trip.creationDate.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
