import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel';

const Info = ({projects}) => {
    const {id} = useParams();

    const project = projects.find((proj)=>proj.id === id);

    if(!project){
        return (
            <div>
                Loading ......
            </div>
        )
    }

  return (
    <div className='flex justify-between gap-4'>
        <div className='border-r p-4'>
            <h1 className='text-4xl'>{project.name}</h1>
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
        <div>
            <Carousel items={project.url_array} />
        </div>
    </div>
  )
}

export default Info