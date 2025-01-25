import data from '../utils/data.json'
const TechStack = () => {
  return (
    <div className='grid grid-cols-3 gap-2 p-2'>
        {data.map((item)=>{
            return (
                <div key={item.name} className='h-28 w-28'>
                    <img src={item.url} className='w-full'></img>
                </div>
            )
        })}
    </div>
  )
}

export default TechStack