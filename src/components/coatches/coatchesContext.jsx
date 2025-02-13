/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const CoatchesContext = createContext();


export function CoatchesProvider({ children }) {
  const [selectedCoatch, setSelectedCoatch] = useState(null);
  
  return (
    <CoatchesContext.Provider value={{ selectedCoatch, setSelectedCoatch }}>
      {children}
    </CoatchesContext.Provider>
  );
}

// 
