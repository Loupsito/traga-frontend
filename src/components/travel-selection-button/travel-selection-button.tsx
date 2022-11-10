import React, {useState} from "react";
import "./travel-selection-button.css";
import {EditableText} from "../editable-text/editable-text";
import {Travel} from "../../model/travel";

export function TravelSelectionButton(props: Travel) {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(props.name);

  const [isInputDisplay, setIsInputDisplay] = useState(false);

  const creationDate = new Date(props.creationDate);

  return (
    <div className="travel-selection-button">
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
      <p>This travel has been clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
