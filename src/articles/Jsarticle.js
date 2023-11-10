import { Link } from "react-router-dom";

function Jsarticle() {
  return (
    <>
      <Link to="https://www.w3schools.com/js/" target="_blank">
        <div className="article_card">
          <p>
            JavaScript is the world's most popular programming language.
            JavaScript is the programming language of the Web. JavaScript is
            easy to learn. This tutorial will teach you JavaScript from basic to
            advanced.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>JavaScript Intro</h4>
            <span>read more</span>
          </div>
        </div>
      </Link>
      <Link
        to="https://www.geeksforgeeks.org/introduction-to-javascript/?ref=lbp"
        target="_blank"
      >
        <div className="article_card">
          <p>
            JavaScript is a weakly typed language (dynamically typed).
            JavaScript can be used for Client-side developments as well as
            Server-side developments. JavaScript is both an imperative and
            declarative type of language. JavaScript contains a standard library
            of objects, like Array, Date, and Math, and a core set of language
            elements like operators, control structures, and statements.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>JavaScript Tutorial</h4>
            <span>read more</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Jsarticle;
