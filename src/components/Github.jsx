import { motion } from "motion/react";

const Github = () => {
  const url = "https://github.com/surimouli";

  const openGithub = () => {
    window.open(url, "_blank");
  };

  return (
    <motion.button
      onClick={openGithub}
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
          src="assets/Github.svg"
          className="w-6 h-6 scale-125" 
          alt="Github icon"
        />
      </motion.span>
      <span className="w-full text-center">Github</span>
    </motion.button>
  );
};

export default Github;