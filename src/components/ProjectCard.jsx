import React from "react";
import { Link } from "react-router-dom";
const ProjectCard = ({ projects }) => {
  return (
    <div className="flex flex-col gap-2 sm:grid grid-cols-4">
        {projects.map((project)=>{
            return(
                <div className="card bg-base-100 w-full shadow-sm transition-all ease-in-out 3s hover:scale-110" key={project.id}>
                <figure>
                  <img
                    src={project.img_url}
                    alt="Project Image"
                  />
                </figure>
                <div className="card-body flex flex-col gap-4">
                  <h2 className="card-title text-4xl font-bold bg-gradient-to-r from-white via-blue-300 to-purple-300 text-transparent bg-clip-text leading-tight">{project.name}</h2>
                  <p>
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                      <Link ><button className="btn btn-accent">Repo</button></Link>
                      <Link><button className="btn btn-primary">Live</button></Link>
                      <Link to={`/info/${project.id}`}><button className="btn btn-info">Info</button></Link>
                  </div>
                </div>
              </div>
            )
        })}
   
    </div>
  );
};

export default ProjectCard;
