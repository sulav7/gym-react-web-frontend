const getTokenFromStorage = () => {
  if (window !== undefined) {
    const token = window.localStorage.getItem("@token");
    return token;
  }
};

const setLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

const getLocalStorage = (key: string) => {
  if (window !== undefined) {
    const value = window.localStorage.getItem(key);
    return value;
  }
};

const clearLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};

export {
  getTokenFromStorage,
  setLocalStorage,
  clearLocalStorage,
  getLocalStorage,
};
