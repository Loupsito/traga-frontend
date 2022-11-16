import {Outlet} from "react-router-dom";

export function TripDetailsPage(props: any) {

  return(
    <div>
      <Outlet />
      <h1>Title : {props.tripId}</h1>
      Nyan cat
    </div>
  );
}
