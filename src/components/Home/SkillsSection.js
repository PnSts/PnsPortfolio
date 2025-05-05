import primefaces from "../../assets/skills/primefaces-icon.png";
import javaswing from "../../assets/skills/java-icon.png";
import apachepoi from "../../assets/skills/apache_poi.png";
import api from "../../assets/skills/api.png";
import jaspersoft from "../../assets/skills/jaspersoft.png";

const skills = {
  "Programming Languages": [
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "VisualBasic", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg" },
    ],
    "Frameworks & Libraries": [
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Primefaces", src: primefaces},
      { name: "Hibernate JPA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" },
      { name: "EclipseLink JPA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" },
      { name: "Java Swing", src: javaswing },
      { name: "JSF", src: "" },
      { name: "JSP", src: "" },
    ],
    "Database Management": [
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Oracle", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
      { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg" },
    ],
    "Tools & IDEs": [
      { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "IntelliJ", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
      { name: "Datagrip", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/datagrip/datagrip-original.svg" },
      { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "GitLab", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
      { name: "Maven", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
      { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    ],
    "Version Control": [
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    ],
    Other: [
      { name: "JSON", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
      { name: "APIs \(SOAP - REST\)", src: api },
      { name: "Apache Poi", src: apachepoi },
      { name: "Jasper Reports", src: jaspersoft },
      { name: "Jest", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
      { name: "Moodle", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/moodle/moodle-original.svg" },
    ],
}


const SkillsSection = () => {
  return (
    <section className="w-full h-auto mx-auto justify-center items-center relative overflow-hidden"  id="skills">
      <div className="relative w-[60%] text-center h-fit max-lg:h-auto mx-auto m-8">
         <div className="w-fit place-self-center">
          <h1 className="titles text-4xl text-center font-bold mb-10">
            {"MY SKILLS"}
          </h1>
         </div>

         <div className="grid grid-flow-row gap- 4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="grid grid-cols-2 max-2xl:grid-cols-1 text-left mt-1">
              <h3 className="text-xl my-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map(({ name, src }) => (
                  <div key={name} className="">
                    {src != "" ? (
                      <img className="w-10 h-10 flex items-center justify-center rounded-lg shadow-lg p-1 skill" src={src} alt={name} title={name} />
                    ) : (
                      <div className="center justify-center font-arial text-sm font-bold" >{name}</div>
                    )}
                    {/* <span className="text-sm font-medium">{name}</span> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
