import { HashLink } from "react-router-hash-link";
import { useProj } from "../../context/ProjectContext";


const CardItem = ({ item }) => {
  
  const { setProj } = useProj() != null ? useProj() :  setProj(item) ;
  
const handleProject = () => {
  setProj(item);
}

  return (
    <article className="flex flex-col rounded-lg bg-gradient-to-t from-[#383838] to-[#1b1b1b] 
    border-[var(--color-second)] border-[1px] border-solid overflow-hidden 
                shadow-[0_0_5px_var(--color-second)] group hover:shadow-[0_0_15px_var(--color-second)] 
                transition-shadow duration-300 ease-in-out">
      <div className="h-60 overflow-hidden">
        <img
          // className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300"
          className="top-0 left-0 min-w-full min-h-full overflow-hidden group-hover:scale-110 transition-all ease-linear duration-300"
          src={item.frontImage}
          alt={item.name}
        />
      </div>
      <div className="flex flex-col flex-grow gap-3">
        <div className="h-auto px-8 pt-3 flex flex-row flex-wrap gap-x-2 justify-between">
          <h2 className="text-left text-2xl max-xl:text-xl font-bold self-center">
            {item.name}
          </h2>
          <div className="flex flex-row gap-x-3 mt-1 items-center justify-center">
            <HashLink
              className="text-2xl devicon-github-original hover:text-[var(--color-second)] transition-all ease-linear duration-300"
              to={item.gitHubUrl} target="_blank"
            ></HashLink>
            {/* <HashLink
              className="button-primary transition-all ease-linear duration-300"
              to="/projectReview#top"
              onClick={() => {handleProject()}}
            > */}
              <HashLink
  to="/projectReview#top"
  scroll={el => {
    // Prevent automatic scroll when navigating
    // We'll handle scroll manually below if needed
    window.scrollTo({ top: 0 }); el.scrollIntoView({ behavior: 'instant', block: 'start' }) // keeps position
  }}
  onClick={() => {
    handleProject(); // set context
  }}
  className="button-primary transition-all ease-linear duration-300"
>
              Explore</HashLink>
            {/* <button
              className="button-primary"
              onClick={() => {setModalOpen(true), handleOpen()}}
            >
              Explore
            </button> */}
          </div>
        </div>

        <p className="px-8 text-md text-justify w-full">{item.info}</p>

        <div className="px-8 mt-auto text-justify mb-4">
          <span className="text-lg text-left font-bold italic pb-4">
            Tech Stack:
          </span>
          <div className="flex flex-wrap gap-3 mt-2">
            {item.stack.map(({ name, src }) => (
              <div key={name} className="flex items-center justify-center">
                {src !== "" ? (
                  <img
                    className="w-auto h-8 max-w-[76px] max-h-auto flex items-center justify-center drop-shadow-[0_0_5px_black]"
                    src={src}
                    alt={name}
                    title={name}
                  />
                ) : (
                  <div className="center justify-center font-arial text-sm font-bold">{name}</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* <ProjectModal
        isOpen={isOpen}
        onClose={() => {setIsOpen(false), handleClose()}}
        proj={item}
      /> */}
    </article>
  );
};

export default CardItem;