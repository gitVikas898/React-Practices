import { BiFolder, BiHome, BiInfoCircle, BiSolidContact } from "react-icons/bi"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="flex gap-2 items-center" to={"/"}>
                <BiHome /> Home
              </Link>
            </li>
            <li>
              <Link className="flex gap-2 items-center" to={"/about"}>
                <BiInfoCircle /> About
              </Link>
            </li>
            <li>
              <Link className="flex gap-2 items-center" to={"/contact"}>
                <BiSolidContact /> Contact
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" to={"/projects"}>
                <BiFolder /> Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
