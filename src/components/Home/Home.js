import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import "./home.css";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
     {/*  <AboutSection /> */}
    </>
  );
};

export default Home;