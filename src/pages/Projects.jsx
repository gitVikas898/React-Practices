import ProjectCard from "../components/ProjectCard";
import projects from "../utils/projects.json";
const Projects = () => {
  return (
    <div className="mx-auto container flex flex-col gap-8">
        <h1 className="text-center text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight overflow-visible">
          My Projects
        </h1>
      <ProjectCard projects={projects} />
    </div>
  );
};

export default Projects;
