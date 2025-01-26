import React from 'react'
import { useParams } from 'react-router-dom'

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
        <div className='border-r'>
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
            <img src={project.img_url} alt="" />
        </div>
    </div>
  )
}

export default Info