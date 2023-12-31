import { createContext, useState } from "react";

export const DataCtx = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const value = { data, setData };
  return <DataCtx.Provider value={value}>{children}</DataCtx.Provider>;
};
