import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import logoImage from "../../assets/logos/logo_vertical_lg_alpha2.png";
import heroImage from "../../assets/dev_image4.png";


const HeroSection = () => {
  return (
    <section className="w-full h-screen max-xl:h-auto mx-auto flex justify-center items-center relative overflow-hidden pt-16" id="home">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-[80%] h-[80%] max-lg:h-auto mx-auto my-auto m-8 flex flex-row max-lg:flex-col overflow-hidden max-lg:overflow-none "
      // rounded-3xl shadow-black shadow-xl"
      >
        {/* Text Side */}
        <div className="w-1/2 max-lg:w-full p-16 max-lg:px-4 max-lg:py-16 flex flex-col justify-center">
          <div>
            <HashLink className="aspect-auto w-[30rem]" to="/#home">
              <img src={logoImage} alt="Panos Tsoukalas logo" />
              <h1 className="w-full font-mono text-[var(--color-second)] text-4xl text-center">SOFTWARE/WEB DEVELOPER</h1>
            </HashLink>
            <p className="font-courier text-[var(--color-second)] mt-64 max-lg:mt-24 text-xl">
              Here you'll find a showcase of my work, skills and the values that drive my approach to software and web development
              <span className="animate-blink text-[var(--color-second)]">_</span>
            </p>
            <div className="w-full max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mx-auto">
              <HashLink className="button-primary mt-16 inline-block" to="/#contact">
                Contact with me...
              </HashLink>
            </div>

          </div>
        </div>
        {/* Diagonal Line */}
        <div className="max-lg:hidden absolute top-[-15px] left-1/2 w-[3px] bg-[var(--color-second)] transform -translate-x-1/2 -rotate-[-9deg] z-20 h-[110%]" />
        <div className="max-lg:hidden absolute top-[-15px] left-1/2 w-[3px] bg-[var(--color-second)] transform -translate-x-1/2 -rotate-[-12deg] z-20 h-[110%]" />
        {/* Image Side */}
        <div className="w-1/2 max-lg:w-full max-lg:h-[30rem] relative overflow-visible max-lg:overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center hero-img rounded-tr-full rounded-br-full"
            style={{
              backgroundImage: `url(${heroImage})`,
              clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
export default HeroSection;
