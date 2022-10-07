import React from "react";
import Timeline from "../components/timeline/Timeline";
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function TimelinePage() {
    // const history = useHistory();
    let navigate = useNavigate();

    React.useEffect(() => {
        const element  = document.getElementById("date");
        console.log(element)
        element.classList.add("story")
        element.onclick= () => navigate('story') 
    },[navigate])

  return (
    <div className="timeline-page">
      <div className="timeline-page__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default TimelinePage;
