import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import { ProjectProvider } from "./context/ProjectContext";
import ProjectReview from "./components/Project/ProjectReview";

function App() {
  return (
    <>
      <ProjectProvider>
        <Layout>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projectReview/:index" element={<ProjectReview />} />
          </Routes>
        </Layout>
      </ProjectProvider>
    </>
  );
}

export default App;
