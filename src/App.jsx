import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './Layout/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Info from './pages/Info'
import projects from "./utils/projects.json"

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
        },
        {
          path:"/info/:id",
          element:<Info projects={projects}/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
