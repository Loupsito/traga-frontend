import {useLoaderData} from "react-router-dom";

export async function loadTripDetails({ params }: any) {
  return fetch(`http://localhost:8080/api/trips/${params.id}`);
}

export function TripDetailsPage() {
  const trip: any = useLoaderData();
  return (
    <div>
      <h1>Title : {trip.id}</h1>
      Nyan cat
    </div>
  );
}
