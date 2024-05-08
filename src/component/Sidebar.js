import React from "react";
import { NavLink } from "react-router-dom";
import {} from "bulma";

const Sidebar = () => {
  return (
    <div>
      <aside class="menu">
        <p class="menu-label">Ventsky</p>
        <ul class="menu-list">
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/table-event"}>Events</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
