import React from "react";
import Story from "../components/timeline/DetailSvg";
import TagsSvg from "../components/tags/TagsSvg";

import Navigation from '../components/navigation/Navigation'

function TagsPage() {

 React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <TagsSvg />
      </div>
    </div>
  );
}

export default TagsPage;
