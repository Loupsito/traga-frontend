export const getTrips = async () => {
  return fetch("http://localhost:8080/api/trips?userId=foobar");
};

export async function getTripDetails({ params }: any) {
  return fetch(`http://localhost:8080/api/trips/${params.id}`);
}
