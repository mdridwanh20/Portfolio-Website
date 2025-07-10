import React from "react";
import { Btn, HeadingH2, HeadingH3, Para } from "../Typography/Typography";
import { TypeAnimation } from "react-type-animation";
import { MdArrowRightAlt } from "react-icons/md";
import profileImg from "../../assets/Portfio website image icon-01.png";

import reactLogo from "../../assets/Best skill logo/react (1).png";
import githubLogo from "../../assets/Best skill logo/github.png";
import figmaLogo from "../../assets/Best skill logo/figma.png";
import cssLogo from "../../assets/Best skill logo/css (1).png";
import javascriptLogo from "../../assets/Best skill logo/javascript.png";
import tailwindLogo from "../../assets/Best skill logo/tailwind.png";
import nodejsLogo from "../../assets/Best skill logo/nodejs.png";
import htmlLogo from "../../assets/Best skill logo/html.png";

export default function HeroSection() {
  // Array of skills
  const skills = [
    { name: "React", logo: reactLogo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "Html", logo: htmlLogo },
    { name: "Node.js", logo: nodejsLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "Figma", logo: figmaLogo },
  ];

  return (
    <div id="hero-section" className="scroll-mt-30 flex flex-col-reverse lg:flex-row items-center justify-between  lg:py-16">
      {/* Text column */}
      <div className="space-y-1 lg:pe-10 w-full lg:w-auto">
        <HeadingH3 headingH3="Welcome to my world" />

        <h1 className="font-bold text-xl leading-7 lg:text-5xl lg:leading-tight text-[var(--deepColor)]">
          Hi, I’m{" "}
          <span className=" text-[var(--primaryColor)]">
            Ridwan <br />a
          </span>{" "}
          <TypeAnimation
            sequence={[
              "Designer.",
              1000,
              "Professional Coder.",
              1000,
              "Developer.",
              1000,
            ]}
            wrapper="span"
            speed={20}
            deletionSpeed={30}
            repeat={Infinity}
          />
        </h1>

        <Para para="I’m a front‑end developer with a full-stack mindset, building fast, responsive, and scalable web applications. I specialize in React, Next.js, and Tailwind CSS on the frontend, and work with Node.js, Express.js, and MongoDB on the backend. I also use Firebase for real-time features and deploy projects with platforms like Vercel and Netlify. My focus is on clean code, smooth user experiences, and modern UI that performs well on all devices" />

        <Btn btn="View My Work" icon={<MdArrowRightAlt />} />

        <div className="pt-8 pb-2 lg:pb-5">
          <HeadingH2 headingH2={"Best Skills"}></HeadingH2>
        </div>

        <div className="flex items-center gap-4 flex-wrap">

          {skills.map((item, index) => (
            <div
              key={index}
              className="shadow-white-3 rounded-md p-3 gradient-box gradient-red-hover:hover"
            >
              <img
                className=" w-6  h-6  object-cover"
                src={item.logo}
                alt={item.name}
              />
            </div>
          ))}
          
        </div>
      </div>

      {/* Image column */}
      <div className="lg:h-auto lg:my-5">
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-full  object-cover"
        />
      </div>
    </div>
  );
}
