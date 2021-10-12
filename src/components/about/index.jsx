import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./about.css";

function About() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about">
      <div className="desc">
        <h1 style={{ color: darkMode && "#888888" }} className="">
          Akbar Ramadhan Yusri
        </h1>
        <h2 className="sub-heading " style={{ color: darkMode && "#888888" }}>
          Computer Science Student
        </h2>
        <p>
          I am currently studying Computer Science at Bina Nusantara University,
          majoring on Database.
        </p>
        <p>
          I'm currently focusing on frontend development stuff. But i also
          intrested in other section aswell such as mobile development and data
          analyst. Im improving my skills everyday to become a better developer.
          On my free time, i spend time by playing games with my friends.
        </p>
        <p>These are technologies that i'm comfortable with:</p>
        <ul className="techs">
          <li>HTML & CSS</li>
          <li>Javascript</li>
          <li>Laravel</li>
          <li>MySQL / MSSQL</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>React.js</li>
          <li>Figma</li>
          <li>Spark.Ar</li>
        </ul>
        <div className="med-icon">
          <a href="https://github.com/ramaakbar">
            <i class=" fab fa-github"></i>
          </a>
          <a href="akbar.6b@gmail.com">
            <i class=" far fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/akbar-ramadhan-yusri-48a422170/">
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
