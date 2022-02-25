import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

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
    <div className="app" className={mode}>
      <Navbar mode={mode} handleMode={handleMode} />
      <Home />
    </div>
  );
}

export default App;
