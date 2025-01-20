import { assets, serviceData, skills } from '@/next_js_portfolio_assets/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  // Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.h4
        className="text-center mb-2 text-2xl font-Ovo"
        variants={fadeInUp}
      >
        What I Offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-bold text-black-300"
        variants={fadeInUp}
      >
        My Services
      </motion.h2>
      <motion.p
        className="text-center max-w-5xl mx-auto mb-12 mt-5 font-Ovo"
        variants={fadeInUp}
      >
        I’ve gained a deep understanding of JavaScript, working extensively with
        React.js, Redux, Context API, Tailwind CSS, and various third-party
        libraries. Additionally, I’ve explored Node.js, Nest.js, and Next.js,
        enhancing my skills in frontend and backend development while mastering
        state management, styling, and scalable application architecture.
      </motion.p>

      {/* Services Section */}
      <motion.div
        className="grid grid-cols-auto gap-6 my-10"
        variants={staggerContainer}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
            key={index}
            className="border border-gray-600 rounded-3xl px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-lg text-gray-500 leading-5 dark:text-white">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.h2
        className="text-center text-5xl font-bold text-black-300"
        variants={fadeInUp}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-auto gap-8 items-center justify-center my-10"
        variants={staggerContainer}
      >
        {skills.map((project, index) => (
          <motion.div
            key={index}
            className="text-center border border-gray-200 rounded-xl shadow-md p-4 bg-white flex flex-row items-center gap-2 cursor-pointer hover:-translate-y-1 duration-500 dark:bg-transparent dark:border-white"
            variants={fadeInUp}
          >
            {/* Image */}
            <img
              src={project.bgImage}
              alt={project.title}
              className="rounded-md w-10 bg-white"
            />
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {project.title}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
