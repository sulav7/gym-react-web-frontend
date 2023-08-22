import { clearLocalStorage, getTokenFromStorage } from "./storage.utils";
import jwtDecode from "jwt-decode";
export const isAuthenticated = () => {
  if (!!getTokenFromStorage() && !isTokenExpired(getTokenFromStorage() ?? "")) {
    return true;
  } else {
    clearLocalStorage("@token");
    return false;
  }
};

export const isTokenExpired = (token: string) => {
  if (token === "") {
    return false;
  }
  const decoded: any = jwtDecode(token);
  if (decoded.exp < Date.now() / 1000) {
    return true;
  }
  return false;
};
