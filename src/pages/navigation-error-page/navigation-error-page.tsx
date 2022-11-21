import { useRouteError } from "react-router-dom";
import React from "react";
import "./navigation-error-page.css";
import { MiddleSizeButton } from "../../components/middle-size-button/middle-size-button";

export default function NavigationErrorPage() {
  const error: any = useRouteError();
  console.error("NavigationErrorPage : ", error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <div className="table-wrapper-error">
        <table className="fl-table-error">
          <tr>
            <th>Status</th>
            <th>Message</th>
          </tr>
          <tr>
            <td>{error.status}</td>
            <td>{error.data ? error.data : error.statusText}</td>
          </tr>
        </table>
      </div>
      <div id="button-wrapper">
        <MiddleSizeButton path="/" text={"Back to home"} />
      </div>
    </div>
  );
}
