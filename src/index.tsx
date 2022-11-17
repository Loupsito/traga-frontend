import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AllTripsPage} from "./pages/all-trip-page/all-trips-page";
import {getTrips} from "./api/travels/travel-api";
import {loadTripDetails, TripDetailsPage,} from "./pages/trip-details-page/trip-details-page";
import ErrorPage from "./pages/error-page/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllTripsPage />,
    loader: getTrips,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trips/:id",
    element: <TripDetailsPage />,
    loader: loadTripDetails,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
