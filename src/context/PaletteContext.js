import createDataContext from './createDataContext';

import seedData from '../data/seedColors';

const paletteReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'add_palette':
      return [...state, payload];
    case 'remove_palette':
      return state.filter(p => p.id !== payload);

    default:
      return state;
  }
};

const addPalette = dispatch => newPalette => {
  dispatch({ type: 'add_palette', payload: newPalette });
};

const removePalette = dispatch => id => {
  dispatch({ type: 'remove_palette', payload: id });
};

const loadData = () => {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  return savedPalettes || seedData;
};

export const { Context, Provider } = createDataContext(
  paletteReducer,
  { addPalette, removePalette },
  loadData()
);
