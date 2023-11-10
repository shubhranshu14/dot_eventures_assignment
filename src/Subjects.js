import React from "react";
import "./styles/subject.css";

import Jsarticle from "./articles/Jsarticle.js";
import Reactarticle from "./articles/Reactarticle.js";
import Cssarticle from "./articles/Cssarticle.js";
import Htmlarticle from "./articles/Htmlarticle.js";

import bgImg1 from "./images/background1.png";
import { useParams } from "react-router-dom";
import subject from "./data.js";
import Navbar from "./Navbar.js";
import { useEffect, useState } from "react";
import Footer from "./Footer.js";
function Subjects() {
  const subjectName = useParams();
  const [subjectData, setSubjectData] = useState([]);
  useEffect(() => {
    const updatedData = subject.filter(
      (data) => data.name === subjectName.name
    );
    setSubjectData(updatedData);
    // console.log(subjectData);
  }, [subjectName]);
  return (
    <div className="subject">
      <Navbar />
      <div className="main_container">
        <h1>{subjectName.name}</h1>
        <div className="videos">
          <h2>Videos</h2>
          <img className="backgroundimg" src={bgImg1} alt="background img" />
          <div className="videos_holder">
            {subjectData.map((data, idx) => (
              <div key={idx} className="video_container">
                <iframe
                  src={`https://www.youtube.com/embed/${data.videolink}`}
                  title={data.title}
                  allowFullScreen
                />
                <h4>{data.title}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="articles">
          <h2>Articles</h2>
          {/* <img
            className="backgroundimg"
            style={{ left: "60%", width: "400px", height: "380px" }}
            src={bgImg2}
            alt="background img"
          /> */}
          <div className="article_holder">
            {subjectName.name === "JavaScript" ? (
              <Jsarticle />
            ) : subjectName.name === "ReactJs" ? (
              <Reactarticle />
            ) : subjectName.name === "HTML" ? (
              <Htmlarticle />
            ) : subjectName.name === "CSS" ? (
              <Cssarticle />
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Subjects;
