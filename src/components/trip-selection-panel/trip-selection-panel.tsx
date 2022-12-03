import React, {useState} from "react";
import "./trip-selection-panel.css";
import {Trip} from "../../model/trip";
import {MiddleSizeButton} from "../middle-size-button/middle-size-button";

export function TripSelectionPanel(props: Trip) {
  const [title] = useState(props.name);
  const creationDate = new Date(props.creationDate);

  return (
    <div className="trip-selection-panel">
      <h2>{title}</h2>
      <p>
        <b>Created by </b> {props.creator}
      </p>
      <p>
        <b>Creation date :</b> {creationDate.toString()}
      </p>
      <MiddleSizeButton path={`trips/${props.id}`} text={"Select this trip"} />
    </div>
  );
}
