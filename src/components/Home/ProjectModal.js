// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight, faChevronLeft, faPlay } from "@fortawesome/free-solid-svg-icons";

// const ProjectModal = ({ isOpen, onClose, proj }) => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   if (!isOpen) return null;

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? proj.images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === proj.images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-14 z-50">
//       <div className="bg-[var(--color-third)] rounded-xl border-[var(--color-second)] border-2 border-solid 
//       shadow-[0_0_25px_var(--color-second)] w-full md:w-[60%] h-[90%] pt-14 pb-4 relative">
//         {/* Title */}
//         <div className="absolute top-3 left-12 text-left pt-1 flex flex-row items-center gap-6 text-2xl font-bold">
//           <h2 className="">
//             {proj.name}
//           </h2>
//           <a
//             href={proj.gitHubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-4xl devicon-github-original hover:text-[var(--color-second)] transition-all"
//           ></a>
//           {proj.demo == "" ? ("") : (
//             <a
//               href={proj.demo}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="button-primary text-base"
//             >
//               <FontAwesomeIcon icon={faPlay} /> Demo
//             </a>)
//           }
//         </div>
//         {/* Exit button */}
//         <button
//           className="absolute top-4 right-6 text-3xl text-white hover:text-[var(--color-second)] transsition-all"
//           onClick={onClose}
//         >
//           &times;
//         </button>

//         {/* Carousel */}
//         <div className="relative w-full h-3/5 my-4 ">
//           <img
//             src={proj.images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             className="w-[80%] h-auto max-h-full relative place-self-center rounded-xl transition-all duration-600 ease-in-out"
//           />

//           {/* Left Button */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-12 transform -translate-y-1/2 p-2 text-2xl text-white hover:text-[var(--color-second)] transition-all"
//           >
//             <FontAwesomeIcon icon={faChevronLeft} />
//           </button>

//           {/* Right Button */}
//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-12 transform -translate-y-1/2 p-2 text-2xl text-white hover:text-[var(--color-second)] transition-all"
//           >
//             <FontAwesomeIcon icon={faChevronRight} />
//           </button>

//           {/* Dots for Image Navigation */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {proj.images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full shadow-sm shadow-black ${currentIndex === index ? 'bg-[var(--color-second)]' : 'bg-white'} transition-all`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Text content */}
//         <div className="px-12 py-2 flex flex-col flex-grow justify-between gap-y-2 ">
//           <h3 className="h-full text-left text-xl font-bold italic">
//             Overview
//           </h3>
//           <p className=" text-md text-justify">{proj.description}</p>

//           <h3 className="h-full text-left text-xl font-bold italic pt-2">
//             Tech Stack
//           </h3>
//           <div className="flex flex-wrap gap-3 mb-4">
//             {proj.stack.map(({ name, src }) => (
//               <div key={name} className="flex items-center justify-center">
//                 {src !== "" ? (
//                   <img
//                     className="w-auto h-10 max-w-[90px] max-h-auto flex items-center justify-center"
//                     src={src}
//                     alt={name}
//                     title={name}
//                   />
//                 ) : (
//                   <div className="center justify-center font-arial text-sm font-bold">{name}</div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* <div className="flex flex-row self-end gap-3 items-center">

//             {proj.demo == "" ? ("") : (
//               <a
//                 href={proj.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="button-primary"
//               >
//                 <FontAwesomeIcon icon={faPlay} /> Demo
//               </a>)
//             }

//           </div> */}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;