import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TinaProvider, TinaCMS } from "tinacms";
import config from "./tina/config";

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <TinaProvider cms={new TinaCMS(config)}>
      <App />
    </TinaProvider>
  </React.StrictMode>
);