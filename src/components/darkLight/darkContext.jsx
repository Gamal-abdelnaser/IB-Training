/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const DarkContext = createContext();

export function DarkProvider({ children }) {
  const [isDark, setIsDark] = useState(null);
  
  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkContext.Provider>
  );
}
