import ProjectCard from "../components/ProjectCard";
import projects from "../utils/projects.json";
const Projects = () => {
  return (
    <div>
      <ProjectCard projects={projects} />
    </div>
  );
};

export default Projects;
