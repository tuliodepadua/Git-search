import React from 'react';

import './styles.scss';

function BtnTheme({ active = false, children }) {
  console.log(active);
  return (
    <button className={`BtnTheme ${active && 'BtnTheme--active'}`}>
      {children}
    </button>
  );
}

export default BtnTheme;
