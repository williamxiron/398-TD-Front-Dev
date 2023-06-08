import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

// core styles
import "./scss/volt.scss";

import App from './App';
import ScrollToTop from './components/ScrollToTop';

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App/>
    <ScrollToTop/>
  </BrowserRouter>
);
