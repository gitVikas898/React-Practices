import React from "react";
import { useFetchdata } from "../../hooks/useFetchdata";
import { useSelector } from "react-redux";
import Card from "./Card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Accordion from "../UI/Accordion";
import { GITHUB, LINKEDIN, TWITTER } from "../../utils/constants";
const Hero = () => {
  useFetchdata();
  const myData = useSelector((store) => store.userStore?.bio);

  if (!myData) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
       
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight overflow-visible">Let's Connect</h1>
          <p className="text-2xl font-bold bg-gradient-to-r from-white via-blue-300 to-purple-300 text-transparent bg-clip-text leading-tight">
            I’m not just here to talk—I’m here to build, collaborate, and make
            things happen! Whether you’re looking for fresh ideas, expert
            insights, or a creative partner, I’d love to hear from you. Let’s
            turn ideas into action and make something incredible together. Reach
            out, and let’s start the conversation! 🚀
          </p>
          <div className="flex justify-end gap-4">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">
                {" "}
                <FaLinkedin /> LinkedIn
              </button>
            </a>
            <a href={TWITTER} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">
                <FaSquareXTwitter />
                Twitter
              </button>
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">
                <FaGithub /> GitHub
              </button>
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
