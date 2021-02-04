import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

import { worker } from './mocks/browser';

worker.start()

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
