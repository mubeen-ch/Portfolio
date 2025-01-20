import { inProcess, workData } from '@/next_js_portfolio_assets/assets/assets';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const Work = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.h4
        className="text-center mb-2 text-2xl font-Ovo"
        variants={cardVariants}
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-bold text-black-300"
        variants={cardVariants}
      >
        My Latest Work
      </motion.h2>
      <motion.p
        className="text-center max-w-5xl mx-auto mb-12 mt-5 font-Ovo text-xl"
        variants={cardVariants}
      >
        Welcome to my portfolio! 🎉 Dive in to explore my journey, skills, and projects. Feel free to look around, and I hope you find my work inspiring and engaging!
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10"
        variants={sectionVariants}
      >
        {workData.map((project, index) => (
          <Link href={project.link} key={index} passHref>
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
              className="border border-gray-200 rounded-xl shadow-md p-4 bg-white text-center flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-500 dark:bg-transparent"
              whileHover="hover"
            >
              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h2>
              {/* Description */}
              <p className="text-lg text-gray-500 mt-3 dark:text-white">
                {project.description}
              </p>
              <h2 className="text-xl font-medium mt-5 dark:text-white">
                FrameWorks: {project.frameworks}
              </h2>
              {/* Image */}
              <div className="mt-4">
                <img
                  src={project.bgImage}
                  alt={project.title}
                  className="rounded-md h-40 shadow-sm border border-black w-full"
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <motion.h2
        className="text-center text-5xl font-bold text-black-300"
        variants={cardVariants}
      >
        Projects in Process
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10"
        variants={sectionVariants}
      >
        {inProcess.map((project, index) => (
          <Link href={project.link} key={index} passHref>
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
              className="border border-gray-200 rounded-xl shadow-md p-4 bg-white text-center flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-500 dark:bg-transparent"
              whileHover="hover"
            >
              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h2>
              {/* Description */}
              <p className="text-lg text-gray-500 mt-3 dark:text-white">
                {project.description}
              </p>
              <h2 className="text-xl font-medium mt-5 dark:text-white">
                FrameWorks: {project.frameworks}
              </h2>
              {/* Image */}
              <div className="mt-4">
                <img
                  src={project.bgImage}
                  alt={project.title}
                  className="rounded-md h-40 shadow-sm border border-black w-full"
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
