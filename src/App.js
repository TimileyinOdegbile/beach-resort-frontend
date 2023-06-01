import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Nabar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nabar />
        <Routes>
          <Route exact path="/" element={Home} />
          <Route exact path="/rooms" element={Rooms} />
          <Route exact path="/rooms/:slug" element={SingleRoom} />
          <Route element={Error} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
