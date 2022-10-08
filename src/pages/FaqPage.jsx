import React from "react";
import Timeline from "../components/timeline/TimelineSvg";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

function FaqPage() {
  let navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const element = document.getElementById("date");
    element.classList.add("pointer");
    element.onclick = () => navigate("story");
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <Timeline />
      </div>
    </div>
  );
}

export default FaqPage;
