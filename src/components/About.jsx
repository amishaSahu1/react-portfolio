import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Hi, I am Amisha.
        I'm a Full-Stack Software Engineer with 2 year of experience in developing web applications. 
        <br /><br /> 
          Currently, I am employed at Infosys, where I work on enhancing and building new features for React-based
          websites. My technical expertise includes ReactJS, Node.js, JavaScript, HTML, CSS, and proficiency
          in integrating frontend and backend systems.
          <br /><br />
          I have a strong foundation in computer science fundamentals, including data structures, algorithms,
          object-oriented design, and problem-solving. I have solved over 450 problems on LeetCode and GFG.
          <br /><br />
          My experience encompasses UI/UX implementation, backend integration, code reviews, and debugging,
          enabling me to maintain high code quality and create seamless user interfaces.
          <br /><br />
          I am actively seeking new opportunities where I can leverage my skills and experience to drive impactful
          projects. I am particularly interested in roles that involve innovative web development and opportunities
          to grow and learn in a challenging environment.
          <br /><br />
          Let’s connect and explore how we can work together to create exceptional web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
