import React from "react";
import Stories from "../components/stories/StoriesSvg"
import Navigation from '../components/navigation/Navigation'

function StoriesPage() {
  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <Stories />
      </div>
    </div>
  );
}

export default StoriesPage;
