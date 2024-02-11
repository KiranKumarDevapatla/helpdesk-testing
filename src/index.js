import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import facebookInit from "./components/facebookSDK/FBInit";

// Start Facebook initialization and then start the app
facebookInit().then(startApp);

function startApp(response) {
  createRoot(document.getElementById('root')).render( // Use createRoot instead of ReactDOM.render
    <React.StrictMode>
      <App response={response}/>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
