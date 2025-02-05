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

// export const SectionsContext = createContext();

// export const SectionsProvider = ({ children }) => {
//   const [sections, setSections] = useState({
//     team: {
//       id: "team",
//       title: "Team Members",
//       items: [
//         { id: 1, name: "John Doe", role: "CEO", image: "", bio: "Experienced leader with 10+ years in the industry" },
//         { id: 2, name: "Jane Smith", role: "CTO", image: "", bio: "Technical expert with a passion for innovation" }
//       ]
//     },
//     heroes: {
//       id: "heroes",
//       title: "Hero Sections",
//       items: [
//         { id: 1, title: "Welcome Hero", subtitle: "Discover Amazing Features", image: "", store: "Get Started" },
//         { id: 2, title: "Special Offer", subtitle: "Limited Time Deal", image: "", store: "Learn More" }
//       ]
//     },
//     programs: {
//       id: "programs",
//       title: "Programs",
//       items: [
//         { id: 1, name: "Basic Training", duration: "3 months", price: "$299", description: "Perfect for beginners", image: "" },
//         { id: 2, name: "Advanced Course", duration: "6 months", price: "$599", description: "For experienced professionals", image: "" }
//       ]
//     },
//   });

//   return (
//     <SectionsContext.Provider value={{ sections, setSections }}>
//       {children}
//     </SectionsContext.Provider>
//   );
// };