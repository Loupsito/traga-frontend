import React from "react";
import { Trip } from "../../model/trip";
import { TripSelectionPanel } from "../../components/trip-selection-panel/trip-selection-panel";
import { useLoaderData } from "react-router-dom";
import "./all-trips-page.css";
import { MiddleSizeButtonRedirect } from "../../components/buttons/middle-size-button-redirect/middle-size-button-redirect";

export function AllTripsPage() {
  const trips = useLoaderData() as Trip[];

  return (
    <div>
      <MiddleSizeButtonRedirect path={`trips/new`} text={"+ Add a new trip"} />
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
    </div>
  );
}
