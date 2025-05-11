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
import apachepoi from "../../assets/skills/Apache_POI-Logo.wine.png";
import eclipselink from "../../assets/skills/eclipselink-logo.png";
import api from "../../assets/skills/api.png";

const projects = [
  {
    name: "Portfolio",
    frontImage: mps1,
    gitHubUrl: "https://github.com/PnSts/PnsPortfolio",
    info: "this.portfolio",
    description: `A responsive and mobile-friendly website that highlights my skills and expertise in web development, built using modern web technologies. 
    It delivers a smooth, engaging user experience while showcasing my ability to create functional, accessible, and visually appealing websites.`,
    images: [ mps1, mps2, mps3, mps4, mps5, mps6, mps7, mps8, mps9, mps10 ],
    stack:[
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    ],
    demo: "",
  },
  {
    name: "TableReservation",
    frontImage: reservations1,
    gitHubUrl: "https://github.com/PnSts/TableReservation",
    info: "Restaurant Website with Reservation System (Full Design & Development)",
    description: `Restaurant Website with Table Reservation System, designed and developed entirely by me. 
    I created the UI/UX in Figma (wireframes, prototypes) and handled the front-end development to ensure a responsive, mobile-friendly experience. 
    The system features a user-friendly table reservation tool and a smooth, intuitive design focused on performance, accessibility, and seamless 
    device adaptability—while reflecting the restaurant’s brand and user needs.`,
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
    info: "Fleet, Maintenance & Monitoring System (Full Stack Development)",
    description: `Helicopter Fleet Management Application developed as a full-stack solution for organizations to monitor and manage operational and maintenance data. 
    The system supports maintenance quality control, tracks key technical and operational metrics, and includes a notification system for critical updates.`,
      images: [ heli1 ],
    stack:[
      { name: "Java Swing", src: javaswing },
      { name: "EclipseLink JPA", src: eclipselink },
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Apache Poi", src: apachepoi },
    ],
    demo: "",
  },
  {
    name: "Website_MPS",
    frontImage: mps1,
    gitHubUrl: "https://github.com/PnSts/Website_MPS",
    info: "Master's Degree Program Management with Role-Based Access (Full Stack Development)",
    description: `Responsive web application simulating a Master's Degree Program management system. 
    Features distinct user roles—Administrator, Professor, and Student—with functionality for managing users, courses, grades, and student data. 
    Built with PHP and MySQL, using phpMyAdmin for database management and WampServer as the local development environment.`,
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
    info: "Selected country's GDP & Oil Consumption Data",
    description: `Economic Data Visualization Web Application displaying GDP and oil consumption statistics for various countries via an external API. 
    Includes basic statistical analysis and allows users to store data for selected countries. 
    Developed as part of a three-member university project team—I was responsible for implementing the application functionality and user interface (UI), 
    while the other team members handled database design and project documentation.`,
    images: [ econometrica1, econometrica2, econometrica3],
    stack:[
      { name: "Java Swing", src: javaswing },
      { name: "Apache DerbyDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" },
      { name: "APIs \(SOAP - REST\)", src: api },
    ],
    demo: "",
  },
  {
    name: "SphyWeb",
    frontImage: sphy1,
    gitHubUrl: "https://github.com/PnSts/SphyWeb",
    info: "Student Management System with Role-Based Access",
    description: `School Student Management Web Application, developed as part of academic coursework. The system supports role-based access control across various user roles and departments. 
    Created by a team of four, with my primary responsibility focused on user interface (UI) development. Built using JavaServer Pages (JSP).`,
    images: [ sphy1, sphy2, sphy3 ],
    stack:[
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Apache Tomcat", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg" },
    ],
    demo: "",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full h-auto mx-auto justify-center items-center relative overflow-hidden py-8" id="projects">
      <div className="w-[80%] text-center h-fit max-lg:h-auto mx-auto m-8">
         <div className="w-fit place-self-center">
          <h1 className="titles text-5xl text-left font-bold mb-20">
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
