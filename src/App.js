import React from "react";
import "./App.css";
import Home from "./components/home/home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
