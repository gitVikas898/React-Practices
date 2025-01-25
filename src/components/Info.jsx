import React from 'react'

const Info = ({info}) => {
    const{about,front,dsa,funfact} = info
  return (
    <div className=' max-w-[640px] flex flex-col gap-3'>
        <h1 className='text-7xl'>About</h1>
        <div className='grid gap-4'>
            <p>{about}</p>
            <p>{front}</p>
            <p>{dsa}</p>
            <p>{funfact}</p>
        </div>
    </div>
  )
}

export default Info