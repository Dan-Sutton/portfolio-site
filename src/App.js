import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import NavbarNew from "./components/NavBarNew";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="app">
      <div className="app-body">
        <NavbarNew
          setShowHome={setShowHome}
          setShowProjects={setShowProjects}
          className="navbar"
        />
        {showHome ? (
          <Home setShowHome={setShowHome} setShowProjects={setShowProjects} />
        ) : null}
        {showProjects ? <Projects /> : null}
      </div>
    </div>
  );
}

export default App;
