import { useLoaderData, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { MiddleSizeButtonRedirect } from "../../../components/buttons/middle-size-button-redirect/middle-size-button-redirect";
import { Trip } from "../../../model/trip";
import "./trip-details-page.css";
import "../../../components/buttons/general-themes-buttons.css";
import { deleteTripRequest, updateTripRequest } from "../../../api/trips/trips-api";

export function TripDetailsPage() {
  const trip = useLoaderData() as Trip;
  const navigate = useNavigate();
  const [name, setName] = useState(trip.name);
  const [creator, setCreator] = useState(trip.creator);
  const [isEditMode, setIsEditMode] = useState(false);
  const cssClass = isEditMode ? "styleEditModeOn" : "styleEditModeOff";

  const turnOffEditMode = async () => {
    setIsEditMode(!isEditMode);
    await saveTrip();
  };

  const saveTrip = async (): Promise<void> => {
    await updateTripRequest({
      tripId: trip.id,
      name: name !== trip.name ? name : undefined,
      creator: creator !== trip.creator ? creator : undefined,
    });
  };

  const deleteTrip = async (): Promise<void> => {
    await deleteTripRequest(trip.id);
    alert(`Trip deleted successfully!`);
    navigate("/");
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

      <h1
        suppressContentEditableWarning={true}
        contentEditable={isEditMode}
        onInput={(e) => handleNameChange(e)}
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
                className={cssClass}
              >
                {trip.creator}
              </td>
              <td>{trip.creationDate.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="actionsOnTrip">
        <button className="button-middle-size" onClick={() => turnOffEditMode()}>
          {isEditMode ? "Save changes" : "Activate edit mode"}
        </button>
        <button
          className="button-middle-size dangerousButtonAction"
          onClick={() => deleteTrip()}
        >
          Delete trip
        </button>
      </div>
    </div>
  );
}
