import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.css";
import "./styles.css";

import Header from "./header";
import Main from "./main";

const App = () => {
  return (
    <div>
      <Header />

      <div className="main-wrapper">
        <Router>
          <Main />
        </Router>
      </div>
    </div>
  );
};

export default App;
