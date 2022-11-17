import { useLoaderData } from "react-router-dom";
import React from "react";
import { MiddleSizeButton } from "../../components/back-to-home-page-button/middle-size-button";
import { Trip } from "../../model/trip";
import "./trip-details-page.css";

export function TripDetailsPage() {
  const trip = useLoaderData() as Trip;
  return (
    <div>
      <MiddleSizeButton path="/" text={"Back to home"} />
      <h1>Title : {trip.name}</h1>
      <div className="table-wrapper">
        <table className="fl-table">
          <tr>
            <th>Creator</th>
            <th>Creation date</th>
          </tr>
          <tr>
            <td>{trip.creator}</td>
            <td>{trip.creationDate.toString()}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
