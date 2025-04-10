import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createContext } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ThemeContext = createContext(null);

root.render(
  <React.StrictMode>
    <ThemeContext.Provider value="">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);

export default ThemeContext;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
