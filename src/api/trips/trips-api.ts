import axios from "axios";

export const createTrip = async (name: string, creator: string) => {
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

export const getTrips = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/api/trips?userId=foobar`);
    console.log(res);
    return res.data;
  } catch (error: any) {
    throwError(error);
  }
};

export const updateTrip = async (params: { idTrip?: number; name?: string; creator?: string }) => {
  try {
    const body = {
      idTrip: params.idTrip,
      name: params.name,
      creator: params.creator,
    };
    const res = await axios.put(`http://localhost:8080/api/trips`, body);
    return res.data;
  } catch (error: any) {
    throwError(error);
  }
};

export async function getOneTrip({ params }: any) {
  try {
    const res = await axios.get(`http://localhost:8080/api/trips/${params.id}`);
    console.log(res);
    return res.data;
  } catch (error: any) {
    throwError(error);
  }
}

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
