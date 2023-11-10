import { Link } from "react-router-dom";

function Cssarticle() {
  return (
    <>
      <Link to="https://www.w3schools.com/css/default.asp" target="_blank">
        <div className="article_card">
          <p>
            CSS is the language we use to style an HTML document. CSS describes
            how HTML elements should be displayed. This tutorial will teach you
            CSS from basic to advanced.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>What is CSS ?</h4>
            <span>read more</span>
          </div>
        </div>
      </Link>
      <Link to="https://www.geeksforgeeks.org/css/" target="_blank">
        <div className="article_card">
          <p>
            This CSS tutorial, whether you’re a student or a professional is a
            valuable resource to enhance the visual appeal of your websites or
            personal blogs. Here, you will learn CSS all the basic to advanced
            concepts, such as properties, selectors, functions, media queries
            and more.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>CSS Tutorial</h4>
            <span>read more</span>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Cssarticle;
