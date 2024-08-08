import React from "react";
import portfoliopic from "../assets/portfoliophoto1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        <div className="block md:hidden w-full flex justify-center">
          <img
            src={portfoliopic}
            alt="profile"
            className="rounded-2xl transform scale-73" 
            style={{ maxWidth: '73%', height: 'auto' }} 
          />
        </div>

        <div className="flex flex-col justify-center h-full w-full md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building websites and designing software.
            I love to work on web applications using technologies like
            React and Node.js.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        
        <div className="hidden md:block w-full md:w-1/2 flex justify-center">
          <img
            src={portfoliopic}
            alt="profile"
            className="rounded-2xl transform scale-73" 
            style={{ maxWidth: '73%', height: 'auto' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;