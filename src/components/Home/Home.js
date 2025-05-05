import PersonasSection from "./PersonasSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import "./home.css";
import primefaces from "../../assets/skills/primefaces-icon.png";
import javaswing from "../../assets/skills/java-icon.png";
import apachepoi from "../../assets/skills/apache_poi.png";
import api from "../../assets/skills/api.png";
import jaspersoft from "../../assets/skills/jaspersoft.png";

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