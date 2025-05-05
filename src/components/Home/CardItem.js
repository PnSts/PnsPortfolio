import React, { useState } from "react";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import ProjectModal from "./ProjectModal";

const CardItem = ({ item }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <article className="h-[450px] rounded-lg bg-[#434343] overflow-hidden border-[var(--color-second)] border-[1px] border-solid hover:shadow-[0_0_10px_var(--color-second)] transition-shadow duration-300 ease-in-out">
      <div className="h-1/2 overflow-hidden">
        <img
          className="hover:scale-110 top-0 left-0 min-w-full h-full transition-all ease-linear duration-300 overflow-hidden"
          src={item.frontImage}
          alt={item.name}
        />
      </div>
      <div className="h-1/2 grid grid-col gap-2">
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
              onClick={() => setModalOpen(true)}
            >
              Explore
            </button>
          </div>
        </div>

        <p className="h-16 px-8 text-justify">{item.info}</p>
        
        <div className="px-8 text-justify">
          <span className="text-sm text-left font-bold">Stack: </span>
          <div className="flex flex-wrap gap-3 mb-4">
            {item.stack.map(({ name, src }) => (
              <div key={name} className="flex items-center justify-center">
                {src !== "" ? (
                  <img
                    className="w-8 h-auto flex items-center justify-center"
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
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        proj={item}
      />
    </article>
  );
};

export default CardItem;