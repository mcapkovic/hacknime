import React from "react";
import DetailSvg from "../components/timeline/DetailSvg";
// import { useNavigate } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation'


function DetailPage() {
    // let navigate = useNavigate();

    // React.useEffect(() => {
    //    window.scrollTo(0, 0);
    //    const allTexts =  document.querySelectorAll("text")
    //    allTexts.forEach(element => {
    //     element.onclick= () => navigate('timeline/detail') 
    //     element.classList.add("pointer")
    //    })
    // },[])

  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <DetailSvg />
      </div>
    </div>
  );
}

export default DetailPage;
