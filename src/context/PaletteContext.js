import createDataContext from './createDataContext';

import seedData from '../data/seedColors';

const paletteReducer = (state, action) => {
  switch (action.type) {
    case 'add_palette':
      return [...state, action.payload];

    default:
      return state;
  }
};

const addPalette = dispatch => async newPalette => {
  await dispatch({ type: 'add_palette', payload: newPalette });
};

const loadData = () => {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  return savedPalettes || seedData;
};

export const { Context, Provider } = createDataContext(
  paletteReducer,
  { addPalette },
  loadData()
);
