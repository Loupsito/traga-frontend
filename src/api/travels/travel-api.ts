export const getTrips = async () => {
  return fetch("http://localhost:8080/api/trips?userId=foobar");
};
