import { motion } from "motion/react";

const Linkedin = () => {
  const url = "https://www.linkedin.com/in/moulisuri/";

  const openLinkedin = () => {
    window.open(url, "_blank");
  };

  return (
    <motion.button
      onClick={openLinkedin}
      whileHover={{ y: -5 }}
      className="relative flex items-center justify-center px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <motion.span
        className="absolute left-4 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <img
          src="./assets/socials/linkedin.svg"
          className="w-6 h-6 scale-125" // ✅ larger without affecting button height
          alt="LinkedIn icon"
        />
      </motion.span>
      <span className="w-full text-center">LinkedIn</span>
    </motion.button>
  );
};

export default Linkedin;