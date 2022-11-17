export const getTrips = async () => {
  return await fetch("http://localhost:8080/api/travel?userId=dd");
};
