import { createContext, useContext } from "react";
import useActualDate from "../hooks/useActualDate";
import { memoTable } from "../tools/fibonacci";

const Context = createContext({});
export function InfoContextProvider({ children }) {
  const date = useActualDate();
  const memoFibonacci = memoTable();
  
  const value = { date, memoFibonacci };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const InfoContext = () => {
  const info = useContext(Context);
  return info;
};
