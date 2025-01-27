import Carousel from "../components/Carousel"
import projects from "../utils/projects.json"
const Contact = () => {
  return (
    <div>
        <Carousel items={projects}/>
    </div>
  )
}

export default Contact