import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-2xl'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Julian MacLeod
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          My goal is creating and designing the ideal user experience. I have worked on a 
          variety of both back-end and front-end projects ranging from REST APIs to
          responsive web applications. Please feel free to browse my previous projects 
          or contact me for any reason.
        </p>
        <div>
          <Link
            to='work'
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
            className='text-white group border-2.5 items-center hover:bg-pink-600 hover:border-pink-600'
          >
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;


