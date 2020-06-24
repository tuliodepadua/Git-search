import React, { createContext, useState, useContext } from 'react';

const PagesContext = createContext();

export default function PagesProvider({ children }) {
  const [Pages, setPages] = useState('home');
  return (
    <PagesContext.Provider value={{ Pages, setPages }}>
      {children}
    </PagesContext.Provider>
  );
}

export function usePages() {
  const context = useContext(PagesContext);
  const { Pages, setPages } = context;
  return { Pages, setPages };
}
