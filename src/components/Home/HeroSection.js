import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import logoImage from "../../assets/logos/logo_alpha.png";
import heroimage from"../../assets/restauranfood.jpg";


const HeroSection = () => {
  return (
    <section className="hero-back">
      <div className="hero">
        <div className="container grid">
          <div className="hero-information">
          <HashLink className="hero-logo" to="/#home">
            <img src={logoImage} alt="Panos Tsoukalas logo" />
          </HashLink>
            {/* <h1>Little Lemon</h1>
            <h2>Chicago</h2> */}
            <p>
            I' m focused on building reliable and scalable solutions.
            With a strong foundation in modern technologies and a passion for clean, maintainable code, I help bring digital ideas to life. 
            Here you'll find a showcase of my work, skills, and the values that drive my approach to software development.
            </p>
            {/* <HashLink className="button-primary" to="/reservations">
              Reserve a table
            </HashLink> */}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-white relative w-full max-w-4xl mx-auto h-96 flex items-stretch overflow-hidden rounded-2xl shadow-lg"
      >

        {/* Image Side */}
        <div className="w-1/2 relative overflow-visible shadow-lg diagonal-shadow ">
          <div
            className="absolute inset-0 bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url(${heroimage})`, clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
          />
        </div>

        {/* Text Side */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Modern Layout</h2>
          <p className="text-gray-600">
            Now with a smooth fade-in animation using Framer Motion!
          </p>
        </div>

      </motion.div>
    </section>
    
  );
};
export default HeroSection;
