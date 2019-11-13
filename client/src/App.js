// done by arif (+ Troy :3) 

// ---- Import Dependencies ----
// React Dependencies
import React from "react";

// Component Dependencies
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Dependencies 
import MainApp from "./pages/MainApp";

function App() {
  return (
    <div>
      <Navbar /> 
      <MainApp />
      <Footer />
    </div>
  );
}

export default App;
