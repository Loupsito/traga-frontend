import React, { useState } from "react";
import "./trip-selection-button.css";
import { EditableText } from "../editable-text/editable-text";
import { Trip } from "../../model/trip";
import { MiddleSizeButton } from "../middle-size-button/middle-size-button";

export function TripSelectionButton(props: Trip) {
  const [title, setTitle] = useState(props.name);

  const [isInputDisplay, setIsInputDisplay] = useState(false);

  const creationDate = new Date(props.creationDate);

  return (
    <div className="trip-selection-button">
      <EditableText
        value={title}
        handleChange={(e: any) => setTitle(e.target.value)}
        handleDoubleClick={() => setIsInputDisplay(true)}
        handleBlur={() => setIsInputDisplay(false)}
        isInputDisplay={isInputDisplay}
      />
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
