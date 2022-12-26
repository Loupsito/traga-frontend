import axios from "axios";

export const createTripRequest = async (name: string, creator: string) => {
  try {
    const body = {
      name: name,
      creator: creator,
    };
    const res = await axios.post(`http://localhost:8080/api/trips`, body);
    return res.data;
  } catch (error: any) {
    throwError(error);
  }
};

export const getTripsRequest = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/api/trips?userId=foobar`);
    return res.data;
  } catch (error: any) {
    throwError(error);
  }
};

export const updateTripRequest = async (params: { tripId?: number; name?: string; creator?: string }) => {
  try {
    const body = {
      tripId: params.tripId,
      name: params.name,
      creator: params.creator,
    };
    const res = await axios.put(`http://localhost:8080/api/trips`, body);
    return res.data;
  } catch (error: any) {
    throwError(error);
  }
};

export async function getOneTripRequest({ params }: any) {
  try {
    const res = await axios.get(`http://localhost:8080/api/trips/${params.id}`);
    return res.data;
  } catch (error: any) {
    throwError(error);
  }
}

export const deleteTripRequest = async (tripId: number) => {
  try {
    const res = await axios.delete(`http://localhost:8080/api/trips/${tripId}`);
    return res.data;
  } catch (error: any) {
    throwError(error);
  }
};

function throwError(error: any) {
  let status = 500;
  let message: string;
  if (error.response) {
    message = error.response.data.message;
    status = error.response.status;
  } else if (error.request) {
    message = error.request;
  } else {
    message = error.message;
  }
  console.error("Trip API error : ", { message, status });
  throw new Response(message, { status });
}
