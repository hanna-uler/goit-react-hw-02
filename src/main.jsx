import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "modern-normalize";
import App from "../src/components/App/App";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
);
