import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './Layout/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {

  const router = createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path : "/",
          element : <Home/> 
        },
        {
          path : "/about",
          element : <About/>
        },
        {
          path :"/contact",
          element :<Contact/>
        },
        {
          path:"/projects",
          element:<Projects/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
