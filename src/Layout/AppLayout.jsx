import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <div></div>
    </div>
  )
}

export default AppLayout