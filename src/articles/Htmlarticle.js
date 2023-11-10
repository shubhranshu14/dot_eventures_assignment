import { Link } from "react-router-dom";

function Htmlarticle() {
  return (
    <>
      <Link to="https://www.w3schools.com/html/default.asp" target="_blank">
        <div className="article_card">
          <p>
            HTML is the standard markup language for Web pages. With HTML you
            can create your own Website. HTML is easy to learn - You will enjoy
            it!
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>What is HTML ?</h4>
            <span>read more</span>
          </div>
        </div>
      </Link>
      <Link to="https://www.geeksforgeeks.org/html/" target="_blank">
        <div className="article_card">
          <p>
            In this HTML tutorial, whether you are a beginner or a professional,
            this tutorial covers everything you need to know to learn HTML from
            the basics to advanced. Providing step-by-step instructions for easy
            learning, it will help you become proficient in HTML.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>HTML Tutorial</h4>
            <span>read more</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Htmlarticle;
