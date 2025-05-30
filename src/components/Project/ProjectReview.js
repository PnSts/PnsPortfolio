import React, { useState, useEffect } from 'react';
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useProj } from "../../context/ProjectContext";

const ProjectReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const { index } = useParams();
  const { projects } = useProj();
  const proj = projects[parseInt(index)];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? proj.images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === proj.images.length - 1 ? 0 : prev + 1));
  };


  return (
    <section className="w-full h-auto mx-auto justify-center items-center relative pt-28 pb-10" id="top">
      <div className="w-[60%] max-xl:w-[80%] text-center justify-center h-auto mx-auto relative">
        {/* Title */}
        <div className="w-full mx-auto text-left flex flex-row flex-grow max-sm:flex-col-reverse flex-wrap justify-between 
                        items-center max-sm:items-start gap-6 text-2xl font-bold pb-8">
          <div className="max-sm:w-full flex flex-row flex-wrap gap-x-8 gap-y-2 items-center justify-center">
            <h2 className="">
              {proj.name}
            </h2>
            {/* {proj.gitHubUrl == "" ? ("") : (
              <a
                href={proj.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl devicon-github-original hover:text-[var(--color-second)] transition-all"
              ></a>)
            } */}

            {proj.demo === "" ? ("") : (
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary text-base"
              >
                <FontAwesomeIcon icon={faPlay} /> Demo
              </a>)
            }
          </div>
          <HashLink
            className="button-primary text-lg"
            to={`/home/#${index}`}
            scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>
            Back
          </HashLink>
        </div>

        <div className="w-full mx-auto flex flex-row flex-grow justify-between gap-x-1 items-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="button-primary w-7 h-7 rounded-full text-lg flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Dots for Image Navigation */}
          <div className="flex flex-wrap space-x-2 gap-y-1 justify-center">
            {proj.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full shadow-sm shadow-black ${currentIndex === index ? 'bg-[var(--color-second)]' : 'bg-white'} transition-all`}
              />
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="button-primary w-7 h-7 rounded-full text-lg flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative w-full h-auto mt-2 mb-6 mx-auto">
          <img
            src={proj.images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-auto relative place-self-center rounded-xl transition-all drop-shadow-[0_0_10px_black] duration-600 ease-in-out"
          />
        </div>

        {/* Text content */}
        <div className="w-[90%] mx-auto py-2 h-auto flex flex-col flex-grow justify-between gap-y-6 ">
          <h3 className="h-full text-left text-2xl font-bold italic">
            Overview
          </h3>
          <p className=" text-lg text-justify pb-2">{proj.description}</p>


          {proj.stack === "" ? ("") : (
            <>
              <h3 className="h-full text-left text-2xl font-bold italic pt-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-6 mb-4">
                {proj.stack.map(({ name, src }) => (
                  <div key={name} className="flex items-center justify-center">
                    {src !== "" ? (
                      <img
                        className="w-auto h-10 max-w-[90px] max-h-auto flex items-center justify-center"
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
            </>)
          }

        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ProjectReview;