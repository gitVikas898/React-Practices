import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <div className='p-20'><Outlet/></div>
        <div className='flex items-center justify-center p-2'>
            <p>Made With 💖 by Vikas</p>
        </div>
    </div>
  )
}

export default AppLayout