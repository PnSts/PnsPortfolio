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
    text: "github.com/PnSts"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/panagiotis-tsoukalas",
    text: "www.linkedin.com/in/panagiotis-tsoukalas",
  },
];

const AboutMeSection = () => {
  return (
    <section className="w-full h-auto mx-auto justify-center items-center relative overflow-hidden py-8" id="aboutme">
      <div className="relative w-[80%] text-center h-fit max-lg:h-auto mx-auto m-8">
        <h1 className="titles text-5xl text-right font-bold">{"ABOUT"}</h1>
        <h1 className="titles text-5xl text-right font-bold mb-20">{"ME"}</h1>

        <div className="
            relative w-2/3 h-auto bg-gradient-to-tr from-[#383838] to-[#1b1b1b] 
            rounded-tl-[40%] rounded-tr-[2%] rounded-bl-[2%] rounded-br-[40%] shadow-[0_0_10px_black] p-32 text-white 
            flex items-center justify-center text-center text-xl 
            transition-transform duration-300">

          <p className="text-xl text-justify">
            Hello, I'm Panos Tsoukalas! <br />
            <span className="font-courier text-[var(--color-second)] text-2xl">Software/Web Developer based in <FontAwesomeIcon icon={faLocationDot} className="pb-1" size="lg" /> Greece </span><br /><br />
            I’m a disciplined and detail-oriented Full Stack Developer with a Bachelor of Science in Computer Science and certified teaching competence in Informatics.
            My expertise spans both front-end and back-end technologies, and I have practical knowledge in modern development practices.
            I’m driven by problem-solving, enhancing user experiences, and building reliable, scalable software solutions that bring ideas to life.
          </p>
        </div>
        <nav className="absolute top-32 w-1/2 left-2/3 ml-10 flex-col gap-8">


          {socials.map((social, index) => (
            <li key={index} className="relative w-20 h-20 list-none flex justify-center items-center mt-8 rounded-full
                bg-[var(--color-third)] border-[var(--color-second)] border-2 border-solid 
                shadow-[0_0_10px_var(--color-second)] hover:shadow-[0_0_25px_var(--color-second)] 
                group hover:scale-110 transition-all duration-300 overflow-visible z-10">
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={social.icon} size="3x" />
              </a>
              <span className="absolute left-2/3 ml-14 w-max font-courier text-[var(--color-second)] text-lg 
                  scale-0 group-hover:scale-100 transition-transform ease-in-out duration-300
                  origin-left z-0 whitespace-nowrap">{social.text}</span>
            </li>

          ))}
        </nav>
      </div>
    </section>
  );
};

export default AboutMeSection;

