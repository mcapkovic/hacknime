import React from "react";
import FaqExampleSvg from "../components/faq/FaqExampleSvg";
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation'


function FaqExamplePage() {
    // let navigate = useNavigate();

    // React.useEffect(() => {
    //      window.scrollTo(0, 0);
    //     const element  = document.getElementById("date");
    //     console.log(element)
    //     element.classList.add("pointer")
    //     element.onclick= () => navigate('story') 
    // },[navigate])

  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <FaqExampleSvg />
      </div>
    </div>
  );
}

export default FaqExamplePage;
