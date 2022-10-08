import React from "react";
import ExampleStory from "../components/stories/ExampleStory";
import Navigation from '../components/navigation/Navigation'
import ExampleStoryBreadcrumb from '../components/stories/ExampleStoryBreadcrumb'
import { useNavigate } from "react-router-dom";


function StoryPage() {
  let navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);

    const elementStory = document.querySelector("story");
    // allTexts.forEach((element) => {
    //   element.onclick = () => navigate("story");
    //   element.classList.add("pointer");
    // });
    if(elementStory == null) return
    elementStory.onclick = () => navigate("/stories/storyXY");
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <ExampleStoryBreadcrumb className='page__content__breadcrumb' />
        <ExampleStory />
      </div>
    </div>
  );
}

export default StoryPage;
