import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import UserProvider from './context/User';
import PagesProvider from './context/Pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

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
