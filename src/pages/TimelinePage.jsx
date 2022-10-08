import React from "react";
import Timeline from "../components/timeline/Timeline";
import { useNavigate } from 'react-router-dom';
import Menu from '../components/menu/Menu'


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
        <Menu />
        <Timeline />
      </div>
    </div>
  );
}

export default TimelinePage;
