import { Link } from "react-router-dom";
import React from "react";
import "../general-themes-buttons.css";

export function MiddleSizeButtonRedirect(props: any) {
  return (
    <div>
      <Link to={props.path}>
        <button className="button-middle-size">{props.text}</button>
      </Link>
    </div>
  );
}
