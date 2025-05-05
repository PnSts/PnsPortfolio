import { HashLink } from "react-router-hash-link";
import econometrica1 from "../../assets/images/projects/Econometrica/1.jpg";
import econometrica2 from "../../assets/images/projects/Econometrica/2.jpg";
import econometrica3 from "../../assets/images/projects/Econometrica/3.jpg";
import mps1 from "../../assets/images/projects/Website_MPS/mps_1.jpg";
import mps2 from "../../assets/images/projects/Website_MPS/mps_2.jpg";
import mps3 from "../../assets/images/projects/Website_MPS/mps_3.jpg";
import mps4 from "../../assets/images/projects/Website_MPS/mps_4.jpg";
import mps5 from "../../assets/images/projects/Website_MPS/mps_5.jpg";
import mps6 from "../../assets/images/projects/Website_MPS/mps_6.jpg";
import mps7 from "../../assets/images/projects/Website_MPS/mps_7.jpg";
import mps8 from "../../assets/images/projects/Website_MPS/mps_8.jpg";
import mps9 from "../../assets/images/projects/Website_MPS/mps_9.jpg";
import mps10 from "../../assets/images/projects/Website_MPS/mps_10.jpg";
import sphy1 from "../../assets/images/projects/Sphy_Web/sphy_1.jpg";
import sphy2 from "../../assets/images/projects/Sphy_Web/sphy_2.jpg";
import sphy3 from "../../assets/images/projects/Sphy_Web/sphy_3.jpg";
import reservations1 from "../../assets/images/projects/TableReservation/reservations_1.jpg";
import reservations2 from "../../assets/images/projects/TableReservation/reservations_2.jpg";
import reservations3 from "../../assets/images/projects/TableReservation/reservations_3.jpg";
import reservations4 from "../../assets/images/projects/TableReservation/reservations_4.jpg";
import reservations5 from "../../assets/images/projects/TableReservation/reservations_5.jpg";
import reservations6 from "../../assets/images/projects/TableReservation/reservations_6.jpg";
import reservations7 from "../../assets/images/projects/TableReservation/reservations_7.jpg";
import heli1 from "../../assets/images/projects/HeliTechApp/heli_1.png";
import CardItem from "./CardItem";
import javaswing from "../../assets/skills/java-icon.png";
import apachepoi from "../../assets/skills/apache_poi.png";
import api from "../../assets/skills/api.png";

const projects = [
  {
    name: "Portfolio",
    frontImage: mps1,
    gitHubUrl: "https://github.com/PnSts/PnsPortfolio",
    info: "Software/Web Developer Portfolio.",
    description: `Responsive website of a hypothetical Master's Degree Program with user roles (Administration, Professors, Students) for users/students/courses/grades management. For DB used phpMyAdmin and WampServer.`,
      images: [ mps1, mps2, mps3, mps4, mps5, mps6, mps7, mps8, mps9, mps10 ],
    stack:[
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },    
      { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JSON", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
    ],
    demo: "",
  },
  {
    name: "TableReservation",
    frontImage: reservations1,
    gitHubUrl: "https://github.com/PnSts/TableReservation",
    info: "Website of a hypothetical Master's Degree Program.",
    description: `Figma..............Responsive website of a hypothetical Master's Degree Program with user roles (Administration, Professors, Students) for users/students/courses/grades management. For DB used phpMyAdmin and WampServer.`,
      images: [ reservations1, reservations2, reservations3, reservations4, reservations5, reservations6, reservations7 ], 
    stack:[
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },    
      { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Jest", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
      { name: "JSON", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
    ],
    demo: "https://pnsts.github.io/TableReservation/",
  },
  {
    name: "HeliTechApp",
    frontImage: heli1,
    gitHubUrl: "https://github.com/PnSts/HeliTechApp",
    info: "Website of a hypothetical Master's Degree Program.",
    description: `Responsive website of a hypothetical Master's Degree Program with user roles (Administration, Professors, Students) for users/students/courses/grades management. For DB used phpMyAdmin and WampServer.`,
      images: [ heli1 ],
    stack:[
      { name: "Java Swing", src: javaswing },
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "EclipseLink JPA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" },
      { name: "Apache Poi", src: apachepoi },
    ],
    demo: "",
  },
  {
    name: "Website_MPS",
    frontImage: mps1,
    gitHubUrl: "https://github.com/PnSts/Website_MPS",
    info: "Website of a hypothetical Master's Degree Program.",
    description: `Responsive website of a hypothetical Master's Degree Program with user roles (Administration, Professors, Students) for users/students/courses/grades management. For DB used phpMyAdmin and WampServer.`,
      images: [ mps1, mps2, mps3, mps4, mps5, mps6, mps7, mps8, mps9, mps10 ],
    stack:[
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },    
      { name: "APIs \(SOAP - REST\)", src: api },
    ],
    demo: "",
  },
  {
    name: "Econometrica",
    frontImage: econometrica3,
    gitHubUrl: "https://github.com/PnSts/Econometrica",
    info: "Selected country's Gross Domestic Product – GDP and Oil Consumption data.",
    description: `Application that provides data on the Gross Domestic Product (GDP) of countries and oil consumption through an API, 
    displaying this information along with its statistical analysis. 
    Additionally, it offers the capability to store data for selected countries.
    This application was created by a team of three members for a university project. The other two team members handled the analysis and design of the database, as well as the documentation of the application. I was responsible for developing the code for the functionality and the user interface (UI).`,
    images: [ econometrica1, econometrica2, econometrica3],
    stack:[
      { name: "Java Swing", src: javaswing },
      { name: "APIs \(SOAP - REST\)", src: api },
      { name: "Apache Derby", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" },
    ],
    demo: "",
  },
  {
    name: "SphyWeb",
    frontImage: sphy1,
    gitHubUrl: "https://github.com/PnSts/SphyWeb",
    info: "Website of a hypothetical Master's Degree Program.",
    description: `JSP..................hypothetical Master's Degree Program with user roles (Administration, Professors, Students) for users/students/courses/grades management. For DB used phpMyAdmin and WampServer.`,
      images: [ sphy1, sphy2, sphy3 ],
    stack:[
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },    
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Apache Tomcat", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg" },
    ],
    demo: "",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full h-auto mx-auto justify-center items-center relative overflow-hidden" id="projects">
      <div className="w-[80%] text-center h-fit max-lg:h-auto mx-auto m-8">
         <div className="w-fit place-self-center">
          <h1 className="titles text-4xl text-center font-bold mb-10">
            {"PROJECTS"}
          </h1>
         </div>
         <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1 max-lg:gap-8">
          {projects.map((project, index) => (
            <CardItem key={index} item={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
