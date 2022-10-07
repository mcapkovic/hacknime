import React from "react";
import MenuSvg from "./MenuSvg";
import { useNavigate } from 'react-router-dom';

function Story() {
  let navigate = useNavigate();

  React.useEffect(() => {
      const element  = document.getElementById("navigation-timeline");
      console.log(element)
      element.classList.add("pointer")
      element.onclick= () => navigate('/') 
  },[navigate])
  return <MenuSvg />;
}

export default Story;
