import React from 'react'
import { useParams } from 'react-router-dom'
import InfoCard from '../components/InfoCard';
import Carousel from '../components/MyCarousel';


const Info = ({projects}) => {
    const {id} = useParams();

    const project = projects.find((proj)=>proj.id === id);

    if(!project){
        return (
            <div className="skeleton h-96 w-full"></div>
        )
    }

  return (
    <div className='container mx-auto'>
        <div className='flex flex-col gap-2 sm:flex-row items-center justify-between '>
            <div>
                <InfoCard project={project} />
            </div>
            <div>
                <Carousel items={project.url_array}/>
            </div>
        </div>
    </div>
  )
}

export default Info