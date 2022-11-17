import { Link } from "react-router-dom";
import React from "react";
import "./middle-size-button.css";

export function MiddleSizeButton(props: any) {
  return (
    <div>
      <Link to={props.path}>
        <button className="button">{props.text}</button>
      </Link>
    </div>
  );
}
