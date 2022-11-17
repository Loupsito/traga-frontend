import React from "react";
import { Trip } from "../../model/trip";
import { TripSelectionButton } from "../../components/trip-selection-button/trip-selection-button";
import { useLoaderData } from "react-router-dom";
import "./all-trips-page.css";

export function AllTripsPage() {
  const trips = useLoaderData() as Trip[];

  return (
    <div className="trips-container">
      {trips.map((data: Trip) => {
        return (
          <TripSelectionButton
            id={data.id}
            name={data.name}
            creationDate={data.creationDate}
            creator={data.creator}
          />
        );
      })}
    </div>
  );
}
