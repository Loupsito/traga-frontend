import React from "react";
import {Travel} from "../../model/travel";
import {TravelSelectionButton} from "../../components/travel-selection-button/travel-selection-button";
import {useLoaderData} from "react-router-dom";
import "./all-trips-page.css"

export function AllTripsPage() {

  const travels = useLoaderData() as Travel[];

  return (
    <div className="trips-container">
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
