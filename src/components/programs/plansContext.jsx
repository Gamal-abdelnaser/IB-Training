/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const PlansContext = createContext();


export function PlansProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  return (
    <PlansContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </PlansContext.Provider>
  );
}

// 
