import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context";
import "./about.css";

function About() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [showText, setShowText] = useState(false);
  const handleMouseEnter = (e) => {
    if (darkMode) {
      e.target.style.color = "#ffffff";
    } else {
      e.target.style.color = "black";
    }
    setShowText(true);
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "#888888";
    setShowText(false);
  };
  return (
    <div className="about" id="about">
      <div className="desc">
        <h1 style={{ color: darkMode && "#ffffff" }} className="">
          Akbar Ramadhan Yusri
        </h1>
        <h2 className="sub-heading " style={{ color: darkMode && "#ffffff" }}>
          Computer Science Student
        </h2>
        <p>
          I am currently studying Computer Science at Bina Nusantara University,
          majoring on Database.
        </p>
        <p>
          I'm currently focusing on web development. But i also intrested in
          other section aswell such as mobile development and data analytic. I'm
          improving my skills everyday to become a better developer. On my free
          time, i spend time by playing games with my friends.
        </p>
        <div class="p">
          These are technologies that i'm comfortable using with:
        </div>
        <ul className="">
          <li>Front-end: HTML & CSS, Javascript, React.js </li>
          <li>Back-end: Laravel, Node.js, MySQL </li>
          <li>Design: Figma</li>
          <li>Data Analysis: Python, R</li>
          <li>Mobile dev: Java</li>
        </ul>
        <p className="contact">Contact me at:</p>
        <div className="med-icon ">
          <a
            href="https://github.com/ramaakbar"
            style={{ color: darkMode && "#888888" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <i class=" fab fa-github"></i>
          </a>
          {/* <a href="akbar.6b@gmail.com" style={{ color: darkMode && "#888888" }}>
            <i class=" far fa-envelope"></i>
          </a> */}
          <a
            href="https://www.linkedin.com/in/akbar-ramadhan-yusri-48a422170/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ color: darkMode && "#888888" }}
          >
            <i class=" fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="profile_photo">
        <img src="pasramawithoutbg.png" width="200px" alt=""></img>
      </div>
    </div>
  );
}

export default About;
