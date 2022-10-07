import React from "react";
import Story from "../components/stories/Story";
import "./timelinePage.css";

function TimelinePage() {
  return (
    <div className="timeline-page">
      <div className="timeline-page__timeline">
        <Story />
      </div>
    </div>
  );
}

export default TimelinePage;
