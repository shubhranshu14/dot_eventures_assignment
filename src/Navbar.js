import "./styles/navbar.css";
import { useState } from "react";
import {
  Close,
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  Menu,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function Navbar() {
  const [isSubVisible, setIsSubVisible] = useState(false);
  const toggleSub = () => {
    setIsSubVisible(!isSubVisible);
  };

  const nav = useNavigate();
  const handleNav = (event, link) => {
    event.stopPropagation();
    setProgress(progress + 20);
    setTimeout(() => {
      setProgress(100);
      nav(link);
      setIsSubVisible(false);
      setNavVisible(false);
    }, 1000);
  };

  // for visibility of navigation for mob view
  const [navVisible, setNavVisible] = useState(false);
  const handleToggle = () => {
    setNavVisible(!navVisible);
    setIsSubVisible(false);
  };
  // for loading bar
  const [progress, setProgress] = useState(0);
  return (
    <nav className="navBar">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Link to="/">
        <div className="logo">
          <h1>Ventures</h1>
        </div>
      </Link>
      {/* navigation for desktop */}
      <div className="navigation">
        <h2 onClick={(e) => handleNav(e, "/")}>Home</h2>
        <div className="sub">
          <div id="sub_selector" onClick={toggleSub}>
            <h2>Subjects</h2>
            {isSubVisible ? (
              <KeyboardArrowUpRounded fontSize="small" />
            ) : (
              <KeyboardArrowDownRounded fontSize="small" />
            )}
          </div>
          <div className="subject_holder" hidden={isSubVisible ? false : true}>
            <h4 onClick={(e) => handleNav(e, "/subject/JavaScript")}>
              JavaScript
            </h4>
            <h4 onClick={(e) => handleNav(e, "/subject/ReactJs")}>React Js</h4>
            <h4 onClick={(e) => handleNav(e, "/subject/CSS")}>CSS</h4>
            <h4 onClick={(e) => handleNav(e, "/subject/HTML", e)}>HTML</h4>
          </div>
        </div>
        <h2 onClick={(e) => handleNav(e, "/QuizArena")}>Quiz Arena</h2>
      </div>
      {/* navigation for mob view */}
      <div className="mob_nav">
        <div className="toggleMenu" onClick={handleToggle}>
          {navVisible ? <Close /> : <Menu />}
        </div>
        <div
          className="sideBar"
          style={{
            display: navVisible ? "block" : "none",
            transition: "display 200ms ease-in-out",
          }}
        >
          <h2 onClick={(e) => handleNav(e, "/")}>Home</h2>
          <div className="sub">
            <h2 onClick={toggleSub}>Subjects</h2>
            {isSubVisible ? (
              <KeyboardArrowUpRounded fontSize="small" />
            ) : (
              <KeyboardArrowDownRounded fontSize="small" />
            )}
          </div>
          <div className="subject_holder" hidden={isSubVisible ? false : true}>
            <h4 onClick={(e) => handleNav(e, "/subject/JavaScript")}>
              JavaScript
            </h4>
            <h4 onClick={(e) => handleNav(e, "/subject/ReactJs")}>React Js</h4>
            <h4 onClick={(e) => handleNav(e, "/subject/CSS")}>CSS</h4>
            <h4 onClick={(e) => handleNav(e, "/subject/HTML", e)}>HTML</h4>
          </div>

          <h2 onClick={(e) => handleNav(e, "/QuizArena")}>Quiz Arena</h2>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
