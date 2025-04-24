import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import logoImage from "../../assets/logos/logo_vertical_lg_alpha.png";
import heroimage from "../../assets/dev_image.jpg";


const HeroSection = () => {
  return (
    <section className="w-full mx-auto flex flex-col justify-center items-center h-auto relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-[80%] mx-auto h-full m-8 flex overflow-hidden items-stretch rounded-2xl shadow-black shadow-lg"
      >
        {/* Text Side */}
        <div className="w-1/2 p-16 flex flex-col justify-center">
          <div className="hero-information p-12">
            <HashLink className="aspect-auto w-[40rem]" to="/#home">
              <img src={logoImage} alt="Panos Tsoukalas logo" />
            </HashLink>
            <p className="font-courier f-color-second mt-64 text-xl">
              {/* Hi! I' m a developer focused on building reliable and scalable solutions.
                With a strong foundation in modern technologies and a passion for clean, maintainable code, I help bring digital ideas to life.
                <br/><br/> */}
              Here you'll find a showcase of my work, skills and the values that drive my approach to software development
              <span className="animate-blink f-color-second">_</span>
            </p>

            <HashLink className="button-primary" to="/#contact">
              Contact with me...
            </HashLink>
          </div>
        </div>
        {/* Diagonal Line */}
        <div className="absolute top-[-15px] left-1/2 w-[3px] bg-cyan-500 bg-color-second transform -translate-x-1/2 -rotate-[-9deg] z-20 h-[110%]" />
        <div className="absolute top-[-15px] left-1/2 w-[3px] bg-cyan-500 bg-color-second transform -translate-x-1/2 -rotate-[-12deg] z-20 h-[110%]" />
        {/* Image Side */}
        <div className="w-1/2 relative overflow-visible">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroimage})`, clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)" }}
          />
        </div>
      </motion.div>
    </section>

  );
};
export default HeroSection;
