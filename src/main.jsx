import App from "./App";
import "./main.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <BrowserRouter basename="/portfolio/">
    <App />
  </BrowserRouter>
);
