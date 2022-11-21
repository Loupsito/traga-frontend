import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllTripsPage } from "./pages/all-trips-page/all-trips-page";
import { getTripDetails, getTrips } from "./api/trips/trips-api";
import { TripDetailsPage } from "./pages/trip-details-page/trip-details-page";
import NavigationErrorPage from "./pages/navigation-error-page/navigation-error-page";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllTripsPage />,
    loader: getTrips,
    errorElement: <NavigationErrorPage />,
  },
  {
    path: "/trips/:id",
    element: <TripDetailsPage />,
    loader: getTripDetails,
    errorElement: <NavigationErrorPage />,
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
