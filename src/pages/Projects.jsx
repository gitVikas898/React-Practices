import Card from "../components/Card"
import projects from "../utils/projects.json"
const Projects = () => {
  return (
    <div className="min-h-screen">
           <div className="flex flex-col">
                <h1 className='text-7xl text-center font-bold'>Projects</h1>
                <Card projects={projects}/>
          </div>
         
    </div>
  )
}

export default Projects