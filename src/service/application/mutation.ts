import { ILogin } from "../../pages/login/login";
import { IUserData } from "../../pages/membership/membership";
import instance from "../../utils/http/interceptor";

export const addApplication = async (data: IUserData) => {
  const addApplication = await instance.post("user/create", data);
  return addApplication;
};

export const LOGIN = async (data: ILogin) => {
  const login = await instance.post("/auth/login", data);
  return login.data;
};

export const EDIT_USER_INFO = async (data: IUserData, id: string) => {
  const editData = await instance.patch(`user/update/${id}`, data);
  return editData;
};

export const DELETE_USER = async (id: string) => {
  const deleteUser = await instance.delete(`user/${id}`);
  return deleteUser;
};

export const UPDATE_PLAN = async (data: IUserData, planId: string) => {
  const updatePlan = await instance.patch(`user/updatePlan/${planId}`, data);
  return updatePlan;
};
