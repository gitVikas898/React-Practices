import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <div className='container py-10 px-10 min-h-[90vh]'><Outlet/></div>
        <footer className='border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60'>
            <div className='container mx-auto px-4 text-center text-gray-500'>
                <p>Made with 💗 by Vikas</p>
            </div>
        </footer>
    </div>
  )
}

export default AppLayout