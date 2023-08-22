import { ReactNode, createContext, useEffect, useState } from "react";
import {
  clearLocalStorage,
  getLocalStorage,
  getTokenFromStorage,
  setLocalStorage,
} from "./storage.utils";

interface IAuthContext {
  userData: IUser;
  login: (user: IUser) => void;
  logout: () => void;
  handleSetUserData: (data: IUser, accessToken: string) => void;
}

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  planId?: string;
  startDate?: string;
  endDate?: string;
}

const AuthContext = createContext<Partial<IAuthContext>>({});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const localStorageData: any = getTokenFromStorage();
  const [userData, setUserData] = useState<IUser>(localStorageData || "");

  const handleSetUserData = (data: IUser, accessToken: string) => {
    setUserData(data as IUser);
    setLocalStorage("@token", accessToken);
    setLocalStorage("@data", JSON.stringify(data));
  };

  const logout = () => {
    setUserData({} as IUser);
    clearLocalStorage("@token");
    clearLocalStorage("@data");
  };
  useEffect(() => {
    const userData = getLocalStorage("@data");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, handleSetUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
