import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import UserProvider from './context/User';
import PagesProvider from './context/Pages';

function App() {
  return (
    <div className="App">
      <PagesProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </UserProvider>
      </PagesProvider>
    </div>
  );
}

export default App;
