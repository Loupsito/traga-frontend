import {useLoaderData} from "react-router-dom";
import React from "react";
import {MiddleSizeButton} from "../../components/middle-size-button/middle-size-button";
import {Trip} from "../../model/trip";
import "./trip-details-page.css";
import {ButtonModalToModifyText} from "../../components/button-modal-to-modify-text/button-modal-to-modify-text";
import {TextToModifyEnum} from "../../components/button-modal-to-modify-text/text-to-modify.enum";

export function TripDetailsPage() {
  const trip = useLoaderData() as Trip;
  return (
    <div>
      <MiddleSizeButton path="/" text={"Back to home"} />
      <h1>
        Title : {trip.name}{" "}
        <ButtonModalToModifyText
          type={TextToModifyEnum.Trip}
          fieldToModify="name"
          value="new name value"
        />
      </h1>

      <div className="table-wrapper">
        <table className="fl-table">
          <tbody>
            <tr>
              <th>Creator</th>
              <th>Creation date</th>
            </tr>
            <tr>
              <td>
                {trip.creator}{" "}
                <ButtonModalToModifyText
                  type={TextToModifyEnum.Trip}
                  fieldToModify="creator"
                  value="new creator value"
                />
              </td>
              <td>{trip.creationDate.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
