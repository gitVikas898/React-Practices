import React from "react";

const InfoCard = ({ project }) => {
  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h1 className="text-4xl">{project.name}</h1>
        <p>{project.description}</p>
        <h2 className="text-xl mt-4">Tech Stack:</h2>
        <ul className="list-disc list-inside">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <h2 className="text-xl mt-4">Features:</h2>
        <ul className="list-disc list-inside">
          {project.features.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;
