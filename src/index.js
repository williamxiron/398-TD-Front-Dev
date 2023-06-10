import React from 'react';
import { createRoot } from "react-dom/client";
import { HashRouter } from 'react-router-dom';

// core styles
import "./scss/volt.scss";

import App from './App';
import ScrollToTop from './components/ScrollToTop';

const root = createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <App/>
    <ScrollToTop/>
  </HashRouter>
);
