import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import logoImage from "../../assets/logos/logo_vertical_lg_alpha.png";
import personasimage from "../../assets/dev_image.jpg";


const PersonasSection = () => {
  return (
    <section className="w-full h-auto mx-auto justify-center items-center relative overflow-hidden" id="home">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-[80%] h-full max-lg:h-auto mx-auto m-8 flex flex-row max-lg:flex-col overflow-hidden max-lg:overflow-none rounded-3xl shadow-black shadow-xl"
      >
        {/* Text Side */}
        <div className="w-1/2 max-lg:w-full p-16 flex flex-col justify-center">
          <div>
            <HashLink className="aspect-auto w-[30rem]" to="/#home">
              <img src={logoImage} alt="Panos Tsoukalas logo" />
            </HashLink>
            <p className="font-courier f-color-second mt-64 max-lg:mt-32 text-xl">
              {/* Hi! I' m a developer focused on building reliable and scalable solutions.
                With a strong foundation in modern technologies and a passion for clean, maintainable code, I help bring digital ideas to life.
                <br/><br/> */}
              Here you'll find a showcase of my work, skills and the values that drive my approach to software development
              <span className="animate-blink f-color-second">_</span>
            </p>

            <HashLink className="button-primary mt-16 inline-block" to="/#contact">
              Contact with me...
            </HashLink>
          </div>
        </div>
        {/* Diagonal Line */}
        <div className="max-lg:hidden absolute top-[-15px] left-1/2 w-[3px] bg-cyan-500 bg-color-second transform -translate-x-1/2 -rotate-[-9deg] z-20 h-[110%]" />
        <div className="max-lg:hidden absolute top-[-15px] left-1/2 w-[3px] bg-cyan-500 bg-color-second transform -translate-x-1/2 -rotate-[-12deg] z-20 h-[110%]" />
        {/* Image Side */}
        <div className="w-1/2 max-lg:w-full max-lg:h-[40rem] relative overflow-visible max-lg:overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center personas-img"
            style={{ backgroundImage: `url(${personasimage})`, 
              clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
export default PersonasSection;
