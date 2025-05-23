import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [proj, setProj] = useState(null);

  return (
    <ProjectContext.Provider value={{ proj, setProj }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProj = () => useContext(ProjectContext);