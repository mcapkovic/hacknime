import React from "react";
import AboutSvg from "../components/about/AboutSvg";
import Navigation from '../components/navigation/Navigation'


function AboutPage() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Navigation />
        <AboutSvg />
      </div>
    </div>
  );
}

export default AboutPage;
