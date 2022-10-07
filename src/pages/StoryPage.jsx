import React from "react";
import Story from "../components/stories/Story";
import Menu from "../components/menu/Menu";

function TimelinePage() {
  return (
    <div className="timeline-page">
      <div className="timeline-page__timeline">
        <Menu />
        <Story />
      </div>
    </div>
  );
}

export default TimelinePage;
