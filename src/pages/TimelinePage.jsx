import React from "react";
import Timeline from "../components/timeline/TimelineSvg";
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation'


function TimelinePage() {
    let navigate = useNavigate();

    React.useEffect(() => {
        const element  = document.getElementById("date");
        console.log(element)
        element.classList.add("pointer")
        element.onclick= () => navigate('story') 
    },[navigate])

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
