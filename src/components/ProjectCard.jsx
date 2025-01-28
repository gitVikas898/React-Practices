import React from "react";

const ProjectCard = ({ projects }) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
        {projects.map((project)=>{
            return(
                <div className="card bg-base-100 w-96 shadow-sm hover:scale-110" key={project.id}>
                <figure>
                  <img
                    src={project.img_url}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.name}</h2>
                  <p>
                    {project.description}
                  </p>
                  <div className="card-actions justify-end">
                    
                  </div>
                </div>
              </div>
            )
        })}
   
    </div>
  );
};

export default ProjectCard;
