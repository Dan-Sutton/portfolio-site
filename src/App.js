import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("darkMode");

  function handleMode() {
    if (mode === "darkMode") {
      setMode("lightMode");
    } else {
      setMode("darkMode");
    }
  }

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app" className={mode}>
              <Home />
            </div>
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <div className="projectspage" className={mode}>
              <Projects />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
