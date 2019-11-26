import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {createStore} from 'redux';

const store = createStore

ReactDOM.render(<Navbar /> , document.getElementById("rootNavbar"));
ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("rootFooter"));
