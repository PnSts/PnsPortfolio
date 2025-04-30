import PersonasSection from "./PersonasSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import "./home.css";

const Home = () => {
  return (
    <>
      <PersonasSection />
      <SkillsSection />
      <ProjectsSection />
     {/*  <AboutSection /> */}
    </>
  );
};

export default Home;