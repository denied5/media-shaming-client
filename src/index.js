import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import {RecordContextProvider} from "./contexts/RecordContext";

import App from './App';
import Page from "./Page";

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <RecordContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="record/:id" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </RecordContextProvider>
  </React.StrictMode>
);

reportWebVitals();
