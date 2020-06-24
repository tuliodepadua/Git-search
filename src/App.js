import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import UserProvider from "./context/User";

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
