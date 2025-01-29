import React from 'react'
import { Link } from "react-router-dom";
const Drawer = () => {
  return (
    <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="btn btn-primary drawer-button"
                >
                  Get Started
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <li>
                    <Link to={"/projects"}>Projects</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                </ul>
              </div>
            </div>
  )
}

export default Drawer