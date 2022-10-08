import React from "react";
import Story from "../components/stories/StorySvg";
import Navigation from '../components/navigation/Navigation'

function TagPage() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <Story />
      </div>
    </div>
  );
}

export default TagPage;
