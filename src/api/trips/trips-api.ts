import axios from "axios";

export const getTrips = async () => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/trips?userId=foobar`
    );
    console.log(res);
    return res.data;
  } catch (error: any) {
    throwError(error);
  }
};

export const updateTrip = async ({ params }: any) => {
  try {
    const res = await axios.put(
      `http://localhost:8080/api/trips?userId=foobar`,
      {
        idTrip: params.idTrip,
        name: params.name,
        creator: params.creator,
      }
    );
    console.log(res);
    return res.data;
  } catch (error: any) {
    throwError(error);
  }
};

export async function getTripDetails({ params }: any) {
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
