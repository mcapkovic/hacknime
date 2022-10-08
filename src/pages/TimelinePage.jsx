import React from "react";
import Timeline from "../components/timeline/TimelineSvg";
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation'


function TimelinePage() {
    let navigate = useNavigate();

    React.useEffect(() => {
       window.scrollTo(0, 0);
       const allTexts =  document.querySelectorAll("text")
       allTexts.forEach(element => {
        element.onclick= () => navigate('stories/story') 
        element.classList.add("pointer")
       })
    },[])

  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <Timeline />
      </div>
    </div>
  );
}

export default TimelinePage;
