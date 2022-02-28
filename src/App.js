import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("darkMode");

  //changes mode
  function handleMode() {
    if (mode === "darkMode") {
      setMode("lightMode");
    } else {
      setMode("darkMode");
    }
  }

  //logs current mode
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
              <Navbar mode={mode} handleMode={handleMode} />
              <Home />
            </div>
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <div className="projectspage" className={mode}>
              <Navbar mode={mode} handleMode={handleMode} />
              <Projects />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
