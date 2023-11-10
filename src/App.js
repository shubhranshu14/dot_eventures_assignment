import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subjects from "./Subjects";
import Quizarena from "./Quizarena";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:name" element={<Subjects />} />
          <Route path="/QuizArena" element={<Quizarena />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
