import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./experience.css";
import Tabs, { TabPane } from "rc-tabs";
import "../../../node_modules/rc-tabs/assets/index.css";
import { useMediaQuery } from "react-responsive";
import { ExperienceData } from "../../data/experience";

function Experience() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const data = ExperienceData;
  function callback(e) {
    console.log(e);
  }
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  let pos = "left";
  if (isTabletOrMobile) {
    console.log("top");
    pos = "top";
  }

  return (
    <div className="experience" id="experience">
      <div className="garis"></div>
      <h1 className="title2" style={{ color: darkMode && "#888888" }}>
        Experience
      </h1>
      <Tabs tabPosition={pos} defaultActiveKey="1" onChange={callback}>
        {data.map((experience) => {
          return (
            <TabPane tab={experience.company} key={experience.id}>
              <h2 className="head">
                {experience.title}
                {" @ "}
                <span className="highlight">{experience.company}</span>
              </h2>
              <div className="sub">{experience.date}</div>
              <ul>
                {experience.desc.map((desc) => {
                  return <li className="parag">{desc}</li>;
                })}
              </ul>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Experience;
