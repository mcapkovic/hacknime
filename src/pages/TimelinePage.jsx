import React from "react";
import Timeline from "../components/timeline/Timeline";
import "./timelinePage.css";

function TimelinePage() {
  return (
    <div className="timeline-page">
      <div className="timeline-page__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default TimelinePage;
