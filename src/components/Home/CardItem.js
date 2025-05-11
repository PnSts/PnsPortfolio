import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import ProjectModal from "./ProjectModal";
import { useModal } from "../../context/ModalContext";

const CardItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { setModalOpen } = useModal();

  const handleOpen = () => {
    setIsOpen(true);
    setModalOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalOpen(false);
  };

  return (
    <article className="h-[450px] rounded-lg bg-gradient-to-tr from-[#383838] to-[#1b1b1b] border-[var(--color-second)] border-2 border-solid  overflow-hidden 
                shadow-[0_0_10px_var(--color-second)] group hover:shadow-[0_0_25px_var(--color-second)] transition-shadow duration-300 ease-in-out">
      <div className="h-1/2 overflow-hidden">
        <img
          className="top-0 left-0 min-w-full h-full overflow-hidden group-hover:scale-110 transition-all ease-linear duration-300"
          src={item.frontImage}
          alt={item.name}
        />
      </div>
      <div className="h-1/2 grid grid-col gap-1">
        <div className="h-16 px-8 flex flex-row items-baseline justify-between">
          <h3 className="text-left text-2xl font-bold">
            {item.name}
          </h3>
          <div className="flex flex-row gap-3 items-center justify-center h-full">
            <HashLink
              className="text-2xl devicon-github-original hover:text-[var(--color-second)] transition-all"
              to={item.gitHubUrl} target="_blank"
            ></HashLink>
            <button
              className="button-primary"
              onClick={() => {setModalOpen(true), handleOpen()}}
            >
              Explore
            </button>
          </div>
        </div>

        <p className="h-16 px-8 text-lg text-justify w-full">{item.info}</p>

        <div className="px-8 text-justify">
          <span className="text-lg text-left font-bold italic pb-4">
            Stack:
          </span>
          <div className="flex flex-wrap gap-3 mt-2 mb-4">
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


      <ProjectModal
        isOpen={isOpen}
        onClose={() => {setIsOpen(false), handleClose()}}
        proj={item}
      />
    </article>
  );
};

export default CardItem;