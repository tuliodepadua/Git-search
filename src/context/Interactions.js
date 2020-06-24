import React, { createContext, useState, useContext } from "react";

const InteractionsContext = createContext();

export default function InteractionsProvider({ children }) {
  const [Interactions, setInteractions] = useState({ page: "home" });
  return (
    <InteractionsContext.Provider value={{ Interactions, setInteractions }}>
      {children}
    </InteractionsContext.Provider>
  );
}

export function useInteractions() {
  const context = useContext(InteractionsContext);
  const { Interactions, setInteractions } = context;
  return { Interactions, setInteractions };
}
