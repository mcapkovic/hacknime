import React from "react";
import Story from "../components/stories/Story";
import Navigation from '../components/navigation/Navigation'

function TimelinePage() {
  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <Story />
      </div>
    </div>
  );
}

export default TimelinePage;
