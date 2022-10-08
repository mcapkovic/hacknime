import React from "react";
import Story from "../components/stories/Story";
import Menu from "../components/menu/Menu";

function TimelinePage() {
  return (
    <div className="page">
      <div className="page__content">
        <Menu />
        <Story />
      </div>
    </div>
  );
}

export default TimelinePage;
