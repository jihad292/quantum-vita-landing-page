<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from "./App";
import { TranslationProvider } from "./contexts/TranslationContext";
=======
// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
>>>>>>> 7abb2ecb50083425128a58655eefd31f150c8f87

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
<<<<<<< HEAD
root.render(
  <TranslationProvider>
    <App />
  </TranslationProvider>
);
=======
root.render(<App />);
>>>>>>> 7abb2ecb50083425128a58655eefd31f150c8f87
