/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const TrainingContext = createContext();


export function TrainingProvider({ children }) {
  const [selectedTraining, setSelectedTraining] = useState(null);
  
  return (
    <TrainingContext.Provider value={{ selectedTraining, setSelectedTraining }}>
      {children}
    </TrainingContext.Provider>
  );
}

// 
