import instance from "../../utils/http/interceptor";

const GET_ONE_USER_DATA = async (id: string) => {
  const getData = await instance.get(`user/${id}`);
  return getData;
};

const GET_PRICING_DATA = async () => {
  const getData = await instance.get("/plan");
  return getData.data?.result;
};

export { GET_ONE_USER_DATA, GET_PRICING_DATA };
