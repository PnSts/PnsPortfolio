import { useState, useEffect } from "react";
import mySkills from "../../data/skills";

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(mySkills);
  }, []);

  return (
    <section className="w-full h-screen min-h-fit max-xl:h-auto mx-auto justify-center items-center relative overflow-hidden py-12" id="skills">
      <div className="relative w-[80%] text-center h-fit max-lg:h-auto mx-auto m-8">

        <h1 className="titles text-5xl text-left font-bold">{"MY"}</h1>
        <h1 className="titles text-5xl text-left font-bold mb-20">{"SKILLS"}</h1>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="relative w-full h-auto list-none justify-center items-center ">
              <div>
                <h3 className="text-2xl text-left mb-4 justify-center">{category}</h3>
                <div className="flex flex-wrap gap-6 rounded-2xl bg-gradient-to-t from-[#383838] to-[#1b1b1b] overflow-hidden border-[var(--color-second)] border-[1px] border-solid py-4 px-8 shadow-[0_0_10px_black]">
                  {items.map(({ name, src }) => (
                    <div key={name}>
                      {src != "" ? (
                        <img className="w-auto h-9 max-w-[76px] max-h-auto flex items-center justify-center drop-shadow-[0_0_0px_var(--color-second)]" src={src} alt={name} title={name} />
                      ) : (
                        <div className="center justify-center font-arial text-sm font-bold" >{name}</div>
                      )}
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
