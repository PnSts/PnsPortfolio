import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: pns.tsoukalas@gmail.com",
    text: "pns.tsoukalas@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/PnSts",
    text: "PnSts"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/panagiotis-tsoukalas",
    text: "panagiotis-tsoukalas",
  },
];

const AboutMeSection = () => {
  return (
    <section className="w-full h-screen min-h-fit max-2xl:h-auto mx-auto my-4 justify-center items-center relative overflow-hidden py-12" id="aboutme">
      <div className="relative w-[80%] text-center h-fit max-lg:h-auto mx-auto m-8">
        <h1 className="titles text-5xl text-right font-bold">{"WHO"}</h1>
        <h1 className="titles text-5xl text-right font-bold mb-10">{"AM I"}</h1>

        <div className="
            relative w-2/3 max-lg:w-full h-auto bg-gradient-to-tr from-[#383838] to-[#1b1b1b] 
            rounded-tl-[40%] max-lg:rounded-tl-[20%] rounded-tr-[2%] rounded-bl-[2%] rounded-br-[40%] max-lg:rounded-br-[20%] shadow-[0_0_10px_black] 
            p-36 max-lg:p-16 max-sm:px-8 max-sm:py-16 text-white 
            flex items-center justify-center text-center text-xl 
            transition-transform duration-300">

          <p className="text-xl max-sm:text-lg text-justify">
            Hello, I'm Panos Tsoukalas! <br />
            <span className="font-courier text-[var(--color-second)] text-2xl max-sm:text-xl">Software/Web Developer based in <FontAwesomeIcon icon={faLocationDot} className="pb-1" size="lg" /> Greece </span><br /><br />
            I’m a disciplined and detail-oriented Full Stack Developer with a Bachelor of Science in Computer Science and certified teaching competence in Informatics.
            My expertise spans both front-end and back-end technologies, and I have practical knowledge in modern development practices.
            I’m driven by problem-solving, enhancing user experiences, and building reliable, scalable software solutions that bring ideas to life.<br /><br />
            I am looking for new opportunities to apply my skills and contribute to innovative projects.
          
          </p>

        </div>

        <nav className="lg:absolute top-36 w-1/2 max-md:w-full left-2/3 ml-10 max-lg:ml-16 flex-col gap-8">
          {socials.map((social, index) => (
            <li key={index} className="relative w-20 h-20 max-lg:w-12 max-lg:h-12 list-none flex justify-center items-center translate-x-[-100%] translate-y-[50%] mt-8 rounded-full
                bg-[var(--color-third)] border-[var(--color-second)] border-2 border-solid 
                shadow-[0_0_10px_var(--color-second)] hover:shadow-[0_0_25px_var(--color-second)] 
                group hover:scale-110 transition-all duration-300 overflow-visible">
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
                <FontAwesomeIcon icon={social.icon} className="w-[50px] h-[50px] max-lg:w-[30px] max-lg:h-[30px]" />
              </a>
              <span className="absolute left-2/3 ml-14 max-sm:ml-8 w-max font-courier text-[var(--color-second)] text-lg max-2xl:text-md max-xl:text-sm max-lg:text-lg max-sm:text-sm
                  scale-0 max-lg:scale-100 group-hover:scale-100 transition-transform ease-in-out duration-300
                  origin-left z-0 whitespace-nowrap">{social.text}</span>
            </li>

          ))}
        </nav>
      </div>
    </section>
  );
};

export default AboutMeSection;

