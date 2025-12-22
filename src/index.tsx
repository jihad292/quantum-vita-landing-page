import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from "./App";
import { TranslationProvider } from "./contexts/TranslationContext";
import ErrorBoundary from "./components/ErrorBoundary";

// Mi Browser error handling
window.addEventListener('error', (event) => {
  // Suppress script errors in Mi Browser
  if (event.message === 'Script error.') {
    event.preventDefault();
    return true;
  }
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundary>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </ErrorBoundary>
);
