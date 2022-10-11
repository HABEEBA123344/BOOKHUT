import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './Context/AuthContext';
import App from './App';
import { BookContextProvider } from './Context/BookContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
