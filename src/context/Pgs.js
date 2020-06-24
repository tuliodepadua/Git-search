import React, { createContext, useState, useContext } from "react";

const PgsContext = createContext();

export default function PgsProvider({ children }) {
  const [Pgs, setPgs] = useState("home");
  return (
    <PgsContext.Provider value={{ Pgs, setPgs }}>
      {children}
    </PgsContext.Provider>
  );
}

export function usePgs() {
  const context = useContext(PgsContext);
  const { Pgs, setPgs } = context;
  return { Pgs, setPgs };
}
