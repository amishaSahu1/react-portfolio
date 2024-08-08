import React from "react";
import blog from "../assets/portfolio/Blogging.png";
import crypto from "../assets/portfolio/cryptoImage.png";
import chatimage from "../assets/portfolio/chatimage.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
      link: '',
      repo: 'https://github.com/amishaSahu1/Blog-Website'
    },
    {
      id: 2,
      src: crypto,
      link: '',
      repo: 'https://github.com/amishaSahu1/CryptoTracker'
    },
    {
      id: 3,
      src: chatimage,
      link: '',
      repo: 'https://github.com/amishaSahu1/chatApplication'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <div className="relative w-full" style={{ paddingTop: '75%' }}> {/* 4:3 Aspect Ratio */}
                <img
                  src={src}
                  alt="projects"
                  className="absolute inset-0 w-full h-full object-cover duration-200 hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-center">
                <button 
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, '_blank')}
                >
                  Demo
                </button>
                <button 
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, '_blank')}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
