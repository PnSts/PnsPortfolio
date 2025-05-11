import primefaces from "../../assets/skills/primefaces-icon.png";
import javaswing from "../../assets/skills/java-icon.png";
import apachepoi from "../../assets/skills/Apache_POI-Logo.wine.png";
import api from "../../assets/skills/api.png";
import jaspersoft from "../../assets/skills/jaspersoft-logo.png";
import eclipselink from "../../assets/skills/eclipselink-logo.png";
import oracle from "../../assets/skills/oracle-icon.svg";

const skills = {
  "Front-End Technologies": [
    { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JSP", src: "" },
    { name: "JSF", src: "" },
    { name: "Primefaces", src: primefaces },
    { name: "Java Swing", src: javaswing }
  ],
  "Back-End Technologies": [
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Hibernate JPA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" },
    { name: "EclipseLink JPA", src: eclipselink },
    { name: "APIs (SOAP - REST)", src: api }
  ],
  "Databases": [
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Oracle", src: oracle },
    { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
    { name: "JSON", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" }
  ],
  "Tools & Platforms": [
    { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "IntelliJ", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
    { name: "Datagrip", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/datagrip/datagrip-original.svg" },
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Maven", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "GitLab", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
    { name: "Moodle", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/moodle/moodle-original.svg" }
  ],
  "Testing & Reporting": [
    { name: "Jest", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
    { name: "Jasper Reports", src: jaspersoft },
    { name: "Apache POI", src: apachepoi }
  ],
  "Programming Languages": [
    { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "VisualBasic", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg" },
  ],
}


const SkillsSection = () => {
  return (
    <section className="w-full h-auto mx-auto justify-center items-center relative overflow-hidden py-8">
      <div className="relative w-[80%] text-center h-fit max-lg:h-auto mx-auto m-8">
        {/* <div className="w-fit place-self-center"> */}
        <h1 className="titles text-5xl text-left font-bold">{"MY"}</h1>
        <h1 className="titles text-5xl text-left font-bold mb-20">{"SKILLS"}</h1>
        {/* </div> */}

        <div className="grid grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            // <div key={category} className="relative w-full h-auto list-none grid grid-cols-2 justify-center items-center mt-8 rounded-full
            // bg-[#1b1b1b] border-[var(--color-second)] border-2 border-solid 
            // shadow-[0_0_5px_var(--color-second)]">
            <div key={category} className="relative w-full h-auto list-none justify-center items-center ">
              {/* <div key={category} className="grid grid-cols-2 max-2xl:grid-cols-1 text-left mt-1"> */}
              <div><h3 className="text-2xl text-left mb-4">{category}</h3>
              <div className="flex flex-wrap gap-7 rounded-2xl bg-gradient-to-t from-[#383838] to-[#1b1b1b] overflow-hidden border-[var(--color-second)] border-[0px] border-solid py-5 px-8 shadow-[0_0_10px_black]">
                {items.map(({ name, src }) => (
                  <div key={name}>
                    {src != "" ? (
                      <img className="w-auto h-9 max-w-[76px] max-h-auto flex items-center justify-center drop-shadow-[0_0_0px_var(--color-second)]" src={src} alt={name} title={name} />
                    ) : (
                      <div className="center justify-center font-arial text-sm font-bold" >{name}</div>
                    )}
                    {/* <span className="text-sm font-medium">{name}</span> */}
                  </div>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
