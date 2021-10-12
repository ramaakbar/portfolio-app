import React from "react";
import About from "../about";
import Footer from "../footer";
import Header from "../header";
import "./home.css";
import FadeIn from "react-fade-in";
import Project from "../project";
function Home() {
  return (
    <div className="home">
      <Header />
      <div>
        <FadeIn>
          <About />
        </FadeIn>
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;