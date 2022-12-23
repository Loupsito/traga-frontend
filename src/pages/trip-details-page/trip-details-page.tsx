import { useLoaderData } from "react-router-dom";
import React from "react";
import { MiddleSizeButton } from "../../components/middle-size-button/middle-size-button";
import { Trip } from "../../model/trip";
import "./trip-details-page.css";

interface SaveTripDto {
  name?: string;
  title?: string;
}

export function TripDetailsPage() {
  const trip = useLoaderData() as Trip;
  const saveTrip = (saveTripDto: SaveTripDto): void => {
    console.log("save : ", saveTripDto);
  };
  return (
    <div>
      <MiddleSizeButton path="/" text={"Back to home"} />
      <h1 contentEditable="true" onBlur={() => saveTrip({ name: trip.name })}>
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
              <td contentEditable="true" onBlur={() => saveTrip({ name: trip.creator })}>
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
