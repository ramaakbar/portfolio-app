import React from "react";
import About from "../about";
import Footer from "../footer";
import Header from "../header";
import "./home.css";
import FadeIn from "react-fade-in";
import Project from "../project";
import Experience from "../experience";
import { useEffect, useState } from "react";
function Home() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home">
      <Header />
      <div>
        <FadeIn>
          <About />
        </FadeIn>
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Footer />
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <i class="fas fa-angle-up"></i>
        </button>
      )}
    </div>
  );
}

export default Home;
