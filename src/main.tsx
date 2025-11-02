// /src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { analytics } from './lib/firebase' // <-- Add this import

// We can log to the console when the promise resolves
analytics.then(analyticsInstance => {
  if (analyticsInstance) {
    console.log("Firebase Analytics (GA4) has been initialized.");
  } else {
    console.warn("Firebase Analytics is not supported in this browser.");
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
