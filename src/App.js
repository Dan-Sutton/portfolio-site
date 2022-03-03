import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import NavbarNew from "./components/NavBarNew";

function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <div className="app">
      <div className="app-body">
        <NavbarNew setShowHome={setShowHome} className="navbar" />
        {showHome ? <Home setShowHome={setShowHome} /> : null}
        <Projects />
      </div>
    </div>
  );
}

export default App;
