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

const cms = new TinaCMS(config);

root.render(
  <React.StrictMode>
    <TinaProvider cms={cms}>
      <App />
    </TinaProvider>
  </React.StrictMode>
);