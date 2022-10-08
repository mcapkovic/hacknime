import React from "react";
import DetailSvg from "../components/timeline/DetailSvg";
import Breadcrumb from "../components/timeline/Breadcrumb";

import { useNavigate } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation'


function DetailPage() {
    let navigate = useNavigate();

    React.useEffect(() => {
       window.scrollTo(0, 0);
       const elementStory = document.querySelector("#story");
       const elementFaq = document.querySelector("#faq");

       if(elementStory == null || elementFaq == null) return
       elementStory.onclick = () => navigate("/stories/storyXY");
       elementStory.classList.add("pointer")

       elementFaq.onclick = () => navigate("/faq/faqYX");
       elementFaq.classList.add("pointer")

    },[])

  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <Breadcrumb />
        <DetailSvg />
      </div>
    </div>
  );
}

export default DetailPage;
