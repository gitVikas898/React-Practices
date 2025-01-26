import React from "react";
import { Link } from "react-router-dom";

const Card = ({ projects }) => {
  return (
    <div className="grid grid-cols-1   md:grid-cols-4 gap-4 borde p-20 ">
      {projects.map((project) => {
        return (
          <div
            key={project.name}
            className=" flex flex-col gap-4 justify-between shadow-md rounded-md p-4 hover:scale-110 transition-all ease-in-out"
          >
            <div className="">
              <img src={project.img_url} className="w-full rounded-md"></img>
            </div>
            <h1 className="text-xl">{project.name}</h1>
            <p>{project.description}</p>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl mt-4">Tech Stack:</h2>
              <ul className="list-disc list-inside">
                {project.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between">
              <Link to={project.repository}>
                <button className="bg-black text-white rounded-lg px-4 py-2 cursor-pointer">
                  Repo
                </button>
              </Link>

              <Link to={`/info/${project.id}`}>
                <button className="bg-blue-400 text-white rounded-lg px-4 py-2 cursor-pointer">
                  Info
                </button>
              </Link>

              <Link to={project.liveDemo}>
                <button className="rounded-lg border cursor-pointer bg-white text-black px-4 py-2">
                  Live
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
