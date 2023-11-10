import "./styles/home.css";
import heroImg from "./images/heroimg.png";
import notesImg from "./images/notesimg.svg";
import quizImg from "./images/quizimg.svg";
import videoImg from "./images/pager.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function Home() {
  const nav = useNavigate();
  // for loading bar
  const [progress, setProgress] = useState(0);
  // for navigating to subject page
  const getStarted = () => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
      nav("/subject/JavaScript");
    }, 1000);
  };
  return (
    <div className="home">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <div className="hero">
        <div id="hero_text">
          <h1>Start learing today with Ventures</h1>
        </div>
        <img id="hero_img" src={heroImg} alt="study img" />
      </div>
      <div className="second_div">
        <h2>Ace your classes with our new suite of study tools</h2>
        <div className="tools_container">
          <div className="cardholder">
            <div className="card_img">
              <img src={notesImg} alt="notes" />
            </div>
            <div className="card_text">
              <h3>Related Articles</h3>
            </div>
          </div>

          <div className="cardholder">
            <div className="card_img">
              <img src={videoImg} alt="notes" />
            </div>
            <div className="card_text">
              <h3>Recorded Videos</h3>
            </div>
          </div>

          <div className="cardholder">
            <div className="card_img">
              <img src={quizImg} alt="notes" />
            </div>
            <div className="card_text">
              <h3>Quiz arena</h3>
            </div>
          </div>
        </div>
        <button className="btn" onClick={getStarted}>
          Get Started
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
