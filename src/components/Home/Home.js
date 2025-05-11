import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import AboutMeSection from "./AboutMeSection";
import ContactMeSection from "./ContactMeSection";
import "./home.css";
import primefaces from "../../assets/skills/primefaces-icon.png";
import javaswing from "../../assets/skills/java-icon.png";
import apachepoi from "../../assets/skills/apache_poi.png";
import api from "../../assets/skills/api.png";
import jaspersoft from "../../assets/skills/jaspersoft.png";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
     
      {/* <ContactMeSection /> */}
    </>
  );
};

export default Home;