import React from 'react';
import seedData from '../data/seedColors';

const PaletteContext = React.createContext();

export const PaletteProvider = ({ children }) => {
  const paletteList = seedData;

  return (
    <PaletteContext.Provider value={paletteList}>
      {children}
    </PaletteContext.Provider>
  );
};

export default PaletteContext;
