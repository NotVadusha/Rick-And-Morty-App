import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import CharacterCard from "./components/characterCard";

const testRick = JSON.parse(localStorage.getItem('charactersInfo'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <ul>
        <CharacterCard data={testRick.results[0]} />
      </ul>
  </React.StrictMode>
);
//