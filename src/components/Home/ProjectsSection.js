import { useProj } from "../../context/ProjectContext";
import CardItem from "./CardItem";

const ProjectsSection = () => {
  const { projects } = useProj();

  return (
    <section className="w-full h-auto mx-auto justify-center items-center relative overflow-hidden py-12" id="projects">
      <div className="w-[80%] text-center h-fit max-lg:h-auto mx-auto m-8">
        <div className="w-fit place-self-center">
          <h1 className="titles text-5xl text-left font-bold mb-20">
            {"PROJECTS"}
          </h1>
        </div>
        <div className="grid grid-cols-3 grid-flow-row max-lg:grid-cols-1 max-2xl:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <CardItem key={index} item={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
