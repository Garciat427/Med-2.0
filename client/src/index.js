import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

ReactDOM.render(<Navbar /> , document.getElementById("rootNavbar"));
ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("rootFooter"));
