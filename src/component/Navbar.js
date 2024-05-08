import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        {/* Navigation*/}
        <nav
          className="navbar navbar-expand-lg bg-dark"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="assets/img/vent.png"
                alt="..."
                style={{ width: "100px", height: "50px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars ms-1" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="text-light mx-3"
                    to={"/home"}
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="text-light mx-3"
                    to={"/dashboard"}
                    style={{ textDecoration: "none" }}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    className="text-light mx-3"
                    to={"/product"}
                    style={{ textDecoration: "none" }}
                  >
                    Events
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    className="text-light mx-3"
                    to={"/team"}
                    style={{ textDecoration: "none" }}
                  >
                    Teams
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    className="text-light mx-3"
                    to={"/"}
                    style={{ textDecoration: "none" }}
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
