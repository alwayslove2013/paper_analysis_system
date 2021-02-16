import React from "react";
import { useLocalObservable } from "mobx-react-lite";
import createStore from "./createStore";

const storeContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalObservable(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useGlobalStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error("no Provider");
  }
  return store;
};
