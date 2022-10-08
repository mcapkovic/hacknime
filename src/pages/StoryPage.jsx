import React from "react";
import DefaultStorySvg from "../components/stories/DefaultStorySvg";
import Navigation from '../components/navigation/Navigation'
import Breadcrumb from '../components/navigation/Breadcrumb'


function StoryPage() {

  React.useEffect(() => {
    window.scrollTo(0, 0);

    // const allTexts = document.querySelector("story");
    // allTexts.forEach((element) => {
    //   element.onclick = () => navigate("story");
    //   element.classList.add("pointer");
    // });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <Breadcrumb className='page__content__breadcrumb' />
        <DefaultStorySvg />
      </div>
    </div>
  );
}

export default StoryPage;
