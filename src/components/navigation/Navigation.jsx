import React from "react";
import NavSvg from "./NavSvg";
import UnderlineSvg from "./UnderlineSvg";

import { NavLink } from "react-router-dom";

function Navigation() {

  return (
    <div className="navigation">
      <div className="navigation__tabs">
        <NavLink
          end
          to="/"
          className="navigation__tabs__tab navigation__tabs__tab1"
        >
          {({ isActive }) => (
            <>
              <div>Timeline</div>
              {isActive ? <UnderlineSvg /> : null}
            </>
          )}
        </NavLink>
        <NavLink
          to="/story"
          className="navigation__tabs__tab navigation__tabs__tab2"
        >
          {({ isActive }) => (
            <>
              <div>Stories</div>
              {isActive ? <UnderlineSvg /> : null}
            </>
          )}
        </NavLink>
        <NavLink
          to="/tags"
          className="navigation__tabs__tab navigation__tabs__tab3"
        >
          {({ isActive }) => (
            <>
              <div>Tags</div>
              {isActive ? <UnderlineSvg /> : null}
            </>
          )}
        </NavLink>
      </div>
      <NavSvg />
    </div>
  );
}

export default Navigation;
