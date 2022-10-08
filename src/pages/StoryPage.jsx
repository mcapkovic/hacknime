import React from "react";
import Story from "../components/stories/StorySvg";
import Navigation from '../components/navigation/Navigation'
import Breadcrumb from '../components/navigation/Breadcrumb'


function StoryPage() {
  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <Breadcrumb className='page__content__breadcrumb' />
        <Story />
      </div>
    </div>
  );
}

export default StoryPage;
