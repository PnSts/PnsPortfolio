import { createContext, useContext, useState, useEffect } from "react";
import myProjects from "../data/projects";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]); 

  useEffect(() => {
    setProjects(myProjects);
  }, []);

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Hook
export const useProj = () => useContext(ProjectContext);