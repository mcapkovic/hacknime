import React from "react";
import Story from "../components/stories/StorySvg";
import Navigation from '../components/navigation/Navigation'

function TagsPage() {
  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <Story />
      </div>
    </div>
  );
}

export default TagsPage;
