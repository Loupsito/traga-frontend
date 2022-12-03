import React from "react";
import {Trip} from "../../model/trip";
import {TripSelectionPanel} from "../../components/trip-selection-panel/trip-selection-panel";
import {useLoaderData} from "react-router-dom";
import "./all-trips-page.css";

export function AllTripsPage() {
  const trips = useLoaderData() as Trip[];

  return (
    <div className="trips-container">
      {trips.map((data: Trip) => {
        return (
          <TripSelectionPanel
            id={data.id}
            name={data.name}
            creationDate={data.creationDate}
            creator={data.creator}
            key={data.id}
          />
        );
      })}
    </div>
  );
}
