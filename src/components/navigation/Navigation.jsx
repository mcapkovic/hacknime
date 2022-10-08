import React from "react";
import NavSvg from "./NavSvg";
import UnderlineSvg from "./UnderlineSvg";

import { NavLink } from "react-router-dom";

function Navigation() {

  return (
    <div className="navigation">
      <div className="navigation__tabs">
        <NavLink
          to="/timeline"
          className="navigation__tabs__tab navigation__tabs__tab1"
        >
          {({ isActive }) => (
            <>
             
              {isActive ? <UnderlineSvg /> : null}
              <div>Timeline</div>
            </>
          )}
        </NavLink>
        <NavLink
          to="/stories"
          className="navigation__tabs__tab navigation__tabs__tab2"
        >
          {({ isActive }) => (
            <>
              {isActive ? <UnderlineSvg /> : null}
              <div>Stories</div>

            </>
          )}
        </NavLink>
        <NavLink
          to="/tags"
          className="navigation__tabs__tab navigation__tabs__tab3"
        >
          {({ isActive }) => (
            <>
              {isActive ? <UnderlineSvg /> : null}
              <div>Tags</div>

            </>
          )}
        </NavLink>
        <NavLink
          to="/about"
          className="navigation__tabs__tab navigation__tabs__tab4"
        >
          {({ isActive }) => (
            <>
              {isActive ? <UnderlineSvg /> : null}
              <div>About</div>

            </>
          )}
        </NavLink>
      </div>
      <NavSvg />
    </div>
  );
}

export default Navigation;
