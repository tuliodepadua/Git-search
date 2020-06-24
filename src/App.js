import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import UserProvider from "./context/User";
import PgsProvider from "./context/Pgs";

function App() {
  return (
    <div className='App'>
      <PgsProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </UserProvider>
      </PgsProvider>
    </div>
  );
}

export default App;
