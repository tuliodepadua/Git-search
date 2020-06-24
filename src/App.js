import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import UserProvider from "./context/User";
import InteractionsProvider from "./context/Interactions";

function App() {
  return (
    <div className='App'>
      <InteractionsProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </UserProvider>
      </InteractionsProvider>
    </div>
  );
}

export default App;
