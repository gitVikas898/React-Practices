import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="bg-rose-300 p-4">
        <ul className="flex justify-evenly">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
            <li>
                <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
                <Link to={"/projects"}>Projects</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header