import { useRouteError } from "react-router-dom";
import React from "react";
import "./navigation-error-page.css";
import { MiddleSizeButtonRedirect } from "../../../components/buttons/middle-size-button-redirect/middle-size-button-redirect";

export default function NavigationErrorPage() {
  const error: any = useRouteError();
  console.error("NavigationErrorPage : ", error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <div className="table-wrapper-error">
        <table className="fl-table-error">
          <tbody>
            <tr>
              <th>Status</th>
              <th>Message</th>
            </tr>
            <tr>
              <td>{error.status}</td>
              <td>{error.data ? error.data : error.statusText}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="button-wrapper">
        <MiddleSizeButtonRedirect path="/" text={"Back to home"} />
      </div>
    </div>
  );
}
