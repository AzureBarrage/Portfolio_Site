import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div id='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-pink-600 text-2xl'
        >
          Hello, my name is
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'
        >
          Julian MacLeod
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-4xl sm:text-7xl font-bold text-[#8892b0]'
        >
          I'm a Software Developer
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-[#8892b0] py-4 max-w-[700px]'
        >
          My goal is creating and designing the ideal user experience. I have worked on a 
          variety of both back-end and front-end projects ranging from REST APIs to
          responsive web applications. Please feel free to browse my previous projects 
          or contact me for any reason.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to='work'
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='text-white group border-2.5 items-center hover:bg-pink-600 hover:border-pink-600 w-fit flex px-6 py-3 my-2 border-2'
            >
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;


