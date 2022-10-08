import React from "react";
import Stories from "../components/stories/StoriesSvg"
import Navigation from '../components/navigation/Navigation'
import { useNavigate } from 'react-router-dom';

function StoriesPage() {
  let navigate = useNavigate();

  React.useEffect(() => {
     window.scrollTo(0, 0);
     const allTexts =  document.querySelectorAll("text")
     allTexts.forEach(element => {
      element.onclick= () => navigate('story') 
      element.classList.add("pointer")
     })
  },[])

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
