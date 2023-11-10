import { Link } from "react-router-dom";

function Reactarticle() {
  return (
    <>
      <Link to="https://www.w3schools.com/react/default.asp" target="_blank">
        <div className="article_card">
          <p>
            React is a JavaScript library for building user interfaces. React is
            used to build single-page applications. React allows us to create
            reusable UI components.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>What is React ?</h4>
            <span>read more</span>
          </div>
        </div>
      </Link>
      <Link
        to="https://www.geeksforgeeks.org/reactjs-tutorials/"
        target="_blank"
      >
        <div className="article_card">
          <p>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. It is a Model-View-Controller (MVC)
            architecture-based library that plays the role of “V” which means
            view. It designs simple views for each state in your application,
            and React will efficiently update and render just the right
            component when your data changes. The declarative view makes your
            code more predictable and easier to debug.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>React Tutorial</h4>
            <span>read more</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Reactarticle;
